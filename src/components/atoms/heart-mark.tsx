import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius } from '@/theme';

export type HeartMarkProps = {
  readonly size?: number;
};

export function HeartMark({ size = 28 }: HeartMarkProps) {
  return (
    <View style={[styles.wrap, { width: size + 16, height: size + 16 }]}>
      <AppText style={{ color: colors.heart, fontSize: size * 0.7, lineHeight: size }}>♥</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.heartWash,
  },
});
