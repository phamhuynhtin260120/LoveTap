import { Pressable, StyleSheet } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type QuickActionProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly onPress?: () => void;
};

export function QuickAction({ title, subtitle, onPress }: QuickActionProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [styles.tile, pressed && styles.pressed]}>
      <AppText variant="label">{title}</AppText>
      <AppText variant="caption" tone="secondary">
        {subtitle}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    flexGrow: 1,
    flexBasis: '47%',
    minHeight: 108,
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.lg,
    padding: spacing.md,
    justifyContent: 'flex-end',
    gap: spacing.xxs,
  },
  pressed: {
    opacity: 0.8,
  },
});
