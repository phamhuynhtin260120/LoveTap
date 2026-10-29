import { StyleSheet, View, type DimensionValue } from 'react-native';

import { gradient } from '@/theme';

export type AmbientGlowProps = {
  /** Màu tâm vầng sáng (rgba). */
  readonly color: string;
  readonly width: DimensionValue;
  readonly height: DimensionValue;
  readonly top?: DimensionValue;
  readonly left?: DimensionValue;
  readonly right?: DimensionValue;
  readonly bottom?: DimensionValue;
};

/**
 * Vầng sáng mờ trang trí — thay cho các khối `rounded-full blur-*` trong thiết kế
 * (React Native không có CSS blur nên dùng radial-gradient mềm cho cùng hiệu ứng).
 */
export function AmbientGlow({ color, width, height, top, left, right, bottom }: AmbientGlowProps) {
  return (
    <View
      pointerEvents="none"
      style={[
        styles.base,
        { width, height, top, left, right, bottom },
        gradient(`radial-gradient(closest-side, ${color} 0%, rgba(255, 255, 255, 0) 100%)`),
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
  },
});
