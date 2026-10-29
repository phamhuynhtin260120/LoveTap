import { Image, type ImageSource } from 'expo-image';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, corner } from '@/theme';

export type AvatarProps = {
  readonly source: ImageSource | number;
  readonly size: number;
  /** Viền trắng (border-4 border-on-primary) như màn 11. */
  readonly borderWidth?: number;
  readonly borderColor?: string;
  readonly style?: StyleProp<ViewStyle>;
  readonly accessibilityLabel?: string;
};

export function Avatar({
  source,
  size,
  borderWidth = 0,
  borderColor = colors.onPrimary,
  style,
  accessibilityLabel,
}: AvatarProps) {
  return (
    <View
      accessibilityLabel={accessibilityLabel}
      style={[
        styles.wrap,
        { width: size, height: size, borderWidth, borderColor },
        style,
      ]}>
      <Image source={source} style={styles.image} contentFit="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderRadius: corner.full,
    overflow: 'hidden',
    backgroundColor: colors.surfaceVariant,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
