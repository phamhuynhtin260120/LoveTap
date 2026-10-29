import { useEffect, useState, type ReactNode } from 'react';
import { Animated, Easing, type StyleProp, type ViewStyle } from 'react-native';

/**
 * Các hiệu ứng chuyển động nhỏ tái hiện animation CSS trong thiết kế Stitch
 * (fade-up, pulse, ping, float). Dùng Animated core + native driver.
 */

function useAnimatedValue(initial: number) {
  const [value] = useState(() => new Animated.Value(initial));
  return value;
}

type MotionProps = {
  readonly children?: ReactNode;
  readonly style?: StyleProp<ViewStyle>;
};

/** `.animate-fade-up`: opacity 0→1, translateY 20→0, 1.5s cubic-bezier(0.16, 1, 0.3, 1). */
export function FadeUp({
  children,
  style,
  delay = 0,
  duration = 1500,
}: MotionProps & { readonly delay?: number; readonly duration?: number }) {
  const progress = useAnimatedValue(0);

  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: 1,
      duration,
      delay,
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      useNativeDriver: true,
    });
    animation.start();
    return () => animation.stop();
  }, [progress, delay, duration]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: progress,
          transform: [
            { translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) },
          ],
        },
      ]}>
      {children}
    </Animated.View>
  );
}

/** Lặp vô hạn một giá trị 0→1→0. */
function useLoop(duration: number, delay = 0) {
  const progress = useAnimatedValue(0);

  useEffect(() => {
    const half = duration / 2;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 1,
          duration: half,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(progress, {
          toValue: 0,
          duration: half,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    const timer = setTimeout(() => loop.start(), delay);
    return () => {
      clearTimeout(timer);
      loop.stop();
    };
  }, [progress, duration, delay]);

  return progress;
}

/** `.animate-gentle-pulse` (scale 1→1.02, opacity .9→1, 4s) và các nhịp "thở" tương tự. */
export function Breathe({
  children,
  style,
  duration = 4000,
  scaleTo = 1.02,
  opacityFrom = 0.9,
}: MotionProps & {
  readonly duration?: number;
  readonly scaleTo?: number;
  readonly opacityFrom?: number;
}) {
  const p = useLoop(duration);
  return (
    <Animated.View
      style={[
        style,
        {
          opacity: p.interpolate({ inputRange: [0, 1], outputRange: [opacityFrom, 1] }),
          transform: [{ scale: p.interpolate({ inputRange: [0, 1], outputRange: [1, scaleTo] }) }],
        },
      ]}>
      {children}
    </Animated.View>
  );
}

/** Tailwind `animate-pulse`: opacity 1 → .5 → 1 trong 2s. */
export function Pulse({ children, style }: MotionProps) {
  const p = useLoop(2000);
  return (
    <Animated.View
      style={[style, { opacity: p.interpolate({ inputRange: [0, 1], outputRange: [1, 0.5] }) }]}>
      {children}
    </Animated.View>
  );
}

/** Tailwind `animate-ping`: vòng lan ra (scale 1→2) và mờ dần, lặp mỗi 1s. */
export function Ping({ style }: { readonly style?: StyleProp<ViewStyle> }) {
  const progress = useAnimatedValue(0);

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bezier(0, 0, 0.2, 1),
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [progress]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        style,
        {
          opacity: progress.interpolate({ inputRange: [0, 0.75, 1], outputRange: [1, 0, 0] }),
          transform: [{ scale: progress.interpolate({ inputRange: [0, 1], outputRange: [1, 2] }) }],
        },
      ]}
    />
  );
}

/** Avatar lơ lửng (`floatLeft` / `floatRight` của màn 11): lên xuống 10pt và xoay nhẹ, 6s. */
export function Float({
  children,
  style,
  direction,
}: MotionProps & { readonly direction: 'left' | 'right' }) {
  const p = useLoop(6000, direction === 'right' ? 3000 : 0);
  const sign = direction === 'left' ? -1 : 1;
  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            { translateY: p.interpolate({ inputRange: [0, 1], outputRange: [0, -10] }) },
            {
              rotate: p.interpolate({
                inputRange: [0, 1],
                outputRange: [`${sign * 5}deg`, `${sign * 2}deg`],
              }),
            },
          ],
        },
      ]}>
      {children}
    </Animated.View>
  );
}
