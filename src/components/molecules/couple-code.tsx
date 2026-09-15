import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type CoupleCodeProps = {
  readonly code: string;
  readonly label: string;
};

export function CoupleCode({ code, label }: CoupleCodeProps) {
  return (
    <View style={styles.wrap}>
      <AppText variant="caption" tone="pink" align="center">
        {label}
      </AppText>
      <AppText variant="code" tone="pink" align="center">
        {code}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.lg,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    gap: spacing.xs,
    alignItems: 'center',
  },
});
