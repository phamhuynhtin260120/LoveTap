import { useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, View, type LayoutChangeEvent } from 'react-native';

import { colors, corner } from '@/theme';

/** Đường cong `M 0 12 Q 25 3, 50 12 T 100 12` (viewBox 100×24) — màn 10. */
function wavePoint(t: number): [number, number] {
  const seg = t < 0.5 ? 0 : 1;
  const u = seg === 0 ? t * 2 : (t - 0.5) * 2;
  const [p0, c, p1] =
    seg === 0
      ? [
          [0, 12],
          [25, 3],
          [50, 12],
        ]
      : [
          [50, 12],
          [75, 21],
          [100, 12],
        ];
  const x = (1 - u) ** 2 * p0[0] + 2 * (1 - u) * u * c[0] + u ** 2 * p1[0];
  const y = (1 - u) ** 2 * p0[1] + 2 * (1 - u) * u * c[1] + u ** 2 * p1[1];
  return [x, y];
}

const HEIGHT = 48;
const SAMPLES = 24;
const DASH = 5;
const GAP = 5;
const ORB = 7;

/** Sợi chỉ cong gạch đứt nối 2 avatar, có chấm sáng chạy dọc (animateMotion 2.8s). */
export function WaveThread() {
  const [width, setWidth] = useState(0);
  const [progress] = useState(() => new Animated.Value(0));

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 2800,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [progress]);

  const sx = width / 100;
  const sy = HEIGHT / 24;
  const toPx = (t: number): [number, number] => {
    const [x, y] = wavePoint(t);
    return [x * sx, y * sy];
  };

  // Rải các nét gạch theo độ dài cung.
  const dashes: { x: number; y: number; angle: number }[] = [];
  if (width > 0) {
    const steps = 200;
    let acc = 0;
    let prev = toPx(0);
    let nextDashAt = 0;
    for (let i = 1; i <= steps; i += 1) {
      const cur = toPx(i / steps);
      const seg = Math.hypot(cur[0] - prev[0], cur[1] - prev[1]);
      acc += seg;
      if (acc >= nextDashAt + DASH / 2) {
        const angle = Math.atan2(cur[1] - prev[1], cur[0] - prev[0]);
        dashes.push({ x: cur[0], y: cur[1], angle });
        nextDashAt += DASH + GAP;
      }
      prev = cur;
    }
  }

  const inputRange = Array.from({ length: SAMPLES + 1 }, (_, i) => i / SAMPLES);
  const points = inputRange.map(toPx);

  return (
    <View style={styles.box} onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)}>
      {dashes.map((d, i) => (
        <View
          key={i}
          style={[
            styles.dash,
            {
              left: d.x - DASH / 2,
              top: d.y - 1,
              transform: [{ rotate: `${d.angle}rad` }],
            },
          ]}
        />
      ))}
      {width > 0 ? (
        <Animated.View
          style={[
            styles.orb,
            {
              transform: [
                {
                  translateX: progress.interpolate({
                    inputRange,
                    outputRange: points.map((p) => p[0] - ORB / 2),
                  }),
                },
                {
                  translateY: progress.interpolate({
                    inputRange,
                    outputRange: points.map((p) => p[1] - ORB / 2),
                  }),
                },
              ],
            },
          ]}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: HEIGHT,
  },
  dash: {
    position: 'absolute',
    width: DASH,
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.outlineVariant,
    opacity: 0.6,
  },
  orb: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: ORB,
    height: ORB,
    borderRadius: corner.full,
    backgroundColor: colors.primaryContainer,
    opacity: 0.9,
  },
});
