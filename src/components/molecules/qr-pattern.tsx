import { StyleSheet, View } from 'react-native';

export type QrPatternProps = {
  readonly size: number;
  readonly color: string;
};

/** Các ô của hình QR minh họa trong thiết kế (viewBox 100×100). */
const FINDERS = [
  [10, 10],
  [60, 10],
  [10, 60],
] as const;
const MODULES = [
  [65, 60, 5, 5],
  [75, 60, 5, 5],
  [85, 60, 5, 5],
  [60, 70, 5, 5],
  [75, 70, 15, 5],
  [60, 80, 10, 5],
  [75, 85, 5, 10],
  [80, 80, 10, 5],
  [85, 85, 5, 5],
] as const;

/**
 * Hình QR trang trí (đúng như SVG trong thiết kế màn 08).
 * Khi có backend sẽ thay bằng QR thật sinh từ mã kết nối.
 */
export function QrPattern({ size, color }: QrPatternProps) {
  const u = size / 100;

  return (
    <View style={{ width: size, height: size }}>
      {FINDERS.map(([x, y]) => (
        <View key={`f${x}-${y}`} style={[styles.abs, { left: x * u, top: y * u }]}>
          <View
            style={{
              width: 30 * u,
              height: 30 * u,
              borderWidth: 6 * u,
              borderColor: color,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ width: 10 * u, height: 10 * u, backgroundColor: color }} />
          </View>
        </View>
      ))}
      {MODULES.map(([x, y, w, h]) => (
        <View
          key={`m${x}-${y}`}
          style={[styles.abs, { left: x * u, top: y * u, width: w * u, height: h * u, backgroundColor: color }]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  abs: {
    position: 'absolute',
  },
});
