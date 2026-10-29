import { useState } from 'react';
import { StyleSheet, View, type LayoutChangeEvent, type StyleProp, type ViewStyle } from 'react-native';

export type DashedLineProps = {
  readonly color: string;
  readonly thickness?: number;
  readonly dash?: number;
  readonly gap?: number;
  readonly style?: StyleProp<ViewStyle>;
};

/** Đường gạch đứt nằm ngang, đầu tròn (stroke-dasharray + stroke-linecap: round). */
export function DashedLine({ color, thickness = 2.5, dash = 4, gap = 4, style }: DashedLineProps) {
  const [width, setWidth] = useState(0);
  const count = Math.max(0, Math.floor((width + gap) / (dash + gap)));

  return (
    <View
      style={[styles.row, { height: thickness }, style]}
      onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)}>
      {Array.from({ length: count }, (_, i) => (
        <View
          key={i}
          style={{
            width: dash,
            height: thickness,
            borderRadius: thickness / 2,
            backgroundColor: color,
            marginRight: i === count - 1 ? 0 : gap,
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
