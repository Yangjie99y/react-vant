/* eslint-disable no-plusplus */
import React, {
  forwardRef,
  memo,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import cls from 'classnames';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import SwiperItem from './SwiperItem';
import { SwiperProps, SwiperInstance, PageIndicatorProps } from './PropsType';
import useRefState from '../hooks/use-ref-state';
import { bound } from '../utils/bound';
import { devWarning } from '../utils/dev-log';
import { noop } from '../utils';
import { getRect } from '../hooks/use-rect';

const PageIndicator = memo<PageIndicatorProps>(({ color = 'primary', vertical, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('indicator', prefixCls);

  const dots: React.ReactElement[] = [];
  for (let i = 0; i < props.total; i++) {
    dots.push(
      <div
        key={i}
        className={cls(
          bem('dot', {
            active: props.current === i,
          }),
        )}
      />,
    );
  }

  return (
    <div className={cls(props.className, bem({ color, vertical }))} style={props.style}>
      {dots}
    </div>
  );
});

const Swiper = forwardRef<SwiperInstance, SwiperProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('swiper', prefixCls);

  const { loop, autoplay, vertical } = props;

  const axis = vertical ? 'y' : 'x';

  const unit = vertical ? 'px' : '%';

  const trackRef = useRef<HTMLDivElement>(null);

  const [root, setRoot] = useState<HTMLDivElement>(null);

  const axisDistance = useMemo(() => {
    if (!vertical) return 100;
    const rect = getRect(root);
    return rect.height;
  }, [vertical, root]);

  const { validChildren, count } = useMemo(() => {
    let innerCount = 0;
    const innerValidChildren = React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return null;
      if (child.type !== SwiperItem) {
        devWarning('Swiper', 'The children of `Swiper` must be `Swiper.Item` components.');
        return null;
      }
      innerCount++;
      return child;
    });
    return {
      validChildren: innerValidChildren,
      count: innerCount,
    };
  }, [props.children]);

  const [current, setCurrent] = useState(props.initialSwipe);

  const [dragging, setDragging, draggingRef] = useRefState(false);

  const [sp, api] = useSpring(
    () => ({
      [axis]: bound(current, 0, count - 1) * axisDistance,
      config: { tension: 200, friction: 30 },
      onRest: () => {
        if (draggingRef.current) return;
        const rawX = sp[axis].get();
        const totalWidth = axisDistance * count;
        const standardX = modulus(rawX, totalWidth);
        if (standardX === rawX) return;
        api.start({
          [axis]: standardX,
          immediate: true,
        });
      },
    }),
    [axisDistance, count],
  );

  const bind = useDrag(
    (state) => {
      const distance = getTrackRect();
      if (!distance) return;
      const [offsetX, offsetY] = state.offset;
      const offsetValue = vertical ? offsetY : offsetX;

      setDragging(true);
      if (!state.last) {
        api.start({
          [axis]: offsetValue,
          immediate: true,
        });
      } else {
        const index = Math.round(
          (offsetValue + Math.min(state.velocity[0] * 2000, distance) * state.direction[0]) /
            distance,
        );

        swipeTo(index);
        window.setTimeout(() => {
          setDragging(false);
        });
      }
    },
    {
      transform: ([x, y]) => (vertical ? [x, -y] : [-x, y]),
      from: () => {
        const distance = getTrackRect();
        return vertical
          ? [0, (sp[axis].get() / axisDistance) * distance]
          : [(sp[axis].get() / axisDistance) * distance, 0];
      },
      bounds: () => {
        if (loop) return {};
        const distance = getTrackRect();
        return {
          [vertical ? 'top' : 'left']: 0,
          [vertical ? 'bottom' : 'right']: (count - 1) * distance,
        };
      },
      rubberband: true,
      axis,
      preventScroll: true,
      pointer: {
        touch: true,
      },
    },
  );

  function getTrackRect() {
    const track = trackRef.current;
    if (!track) return 0;
    const { offsetWidth, offsetHeight } = track;
    return vertical ? offsetHeight : offsetWidth;
  }

  function swipeTo(index: number) {
    if (loop) {
      const i = modulus(index, count);
      setCurrent(i);
      props.onChange?.(i);
      api.start({
        [axis]: index * axisDistance,
      });
    } else {
      const i = bound(index, 0, count - 1);
      setCurrent(i);
      props.onChange?.(i);
      api.start({
        [axis]: i * axisDistance,
      });
    }
  }

  function swipeNext() {
    swipeTo(Math.round(sp[axis].get() / axisDistance) + 1);
  }

  function swipePrev() {
    swipeTo(Math.round(sp[axis].get() / axisDistance) - 1);
  }

  useImperativeHandle(ref, () => ({
    swipeTo,
    swipeNext,
    swipePrev,
  }));

  useEffect(() => {
    if (!autoplay || dragging) return noop;
    const autoplayInterval = typeof autoplay === 'boolean' ? 5000 : autoplay;
    const interval = window.setInterval(() => {
      swipeNext();
    }, autoplayInterval);
    return () => {
      window.clearInterval(interval);
    };
  }, [autoplay, dragging, axisDistance]);

  if (count === 0) {
    devWarning('Swiper', '`Swiper` needs at least one child.');
  }

  return (
    <div ref={setRoot} className={cls(props.className, bem())} style={props.style}>
      <div
        className={cls(
          bem('track', {
            'allow-touch-move': props.touchable,
          }),
        )}
        onClickCapture={(e) => {
          if (draggingRef.current) {
            e.stopPropagation();
          }
        }}
        {...(props.touchable ? bind() : {})}
      >
        <div
          className={cls(
            bem('track-inner', {
              vertical,
            }),
          )}
          ref={trackRef}
        >
          {React.Children.map(validChildren, (child, index) => {
            return (
              <animated.div
                className={cls(bem('slide'))}
                style={{
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  [axis]: sp[axis].to((x) => {
                    let position = -x + index * axisDistance;
                    if (loop) {
                      const totalWidth = count * axisDistance;
                      const flagWidth = totalWidth / 2 - 10;
                      position = modulus(position + flagWidth, totalWidth) - flagWidth;
                    }
                    return `${position}${unit}`;
                  }),
                  [vertical ? 'top' : 'left']: `-${index * axisDistance}${unit}`,
                }}
              >
                {child}
              </animated.div>
            );
          })}
        </div>
      </div>
      {props.indicator === undefined ? (
        <div className={cls(bem('indicator', { vertical }))}>
          <PageIndicator
            {...props.indicatorProps}
            vertical={vertical}
            total={count}
            current={current}
          />
        </div>
      ) : (
        props.indicator(count, current)
      )}
    </div>
  );
});

// defaultProps defined if need
Swiper.defaultProps = {
  initialSwipe: 0,
  touchable: true,
  loop: true,
  autoplay: 2000,
};

export default Swiper;

function modulus(value: number, division: number) {
  const remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
}