import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type QuickActionProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly iconGlyph: string;
  readonly onPress?: () => void;
};

export function QuickAction({ title, subtitle, iconGlyph, onPress }: QuickActionProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [styles.tile, pressed && styles.pressed]}>
      <View style={styles.iconWrap}>
        <AppText style={styles.icon}>{iconGlyph}</AppText>
      </View>
      <AppText variant="label" style={styles.title}>
        {title}
      </AppText>
      <AppText variant="caption" tone="secondary" style={styles.subtitle}>
        {subtitle}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    flexGrow: 1,
    flexBasis: '47%',
    maxWidth: '48.5%',
    minHeight: 108,
    backgroundColor: colors.tileWash,
    borderRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.xxs,
  },
  pressed: {
    opacity: 0.8,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  icon: {
    color: colors.heart,
    fontSize: 16,
    lineHeight: 20,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
  },
});
