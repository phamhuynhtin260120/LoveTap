import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type ConnectionOptionCardProps = {
  readonly eyebrow: string;
  readonly title: string;
  readonly body: string;
  readonly cta: string;
  readonly iconGlyph: string;
  readonly badgeGlyph: string;
  readonly onPress: () => void;
};

export function ConnectionOptionCard({
  eyebrow,
  title,
  body,
  cta,
  iconGlyph,
  badgeGlyph,
  onPress,
}: ConnectionOptionCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.eyebrowRow}>
        <AppText variant="caption" tone="pink" style={styles.eyebrow}>
          {eyebrow}
        </AppText>
        <AppText tone="pink" style={styles.badge}>
          {badgeGlyph}
        </AppText>
      </View>

      <View style={styles.bodyRow}>
        <View style={styles.iconBox}>
          <AppText style={styles.iconGlyph}>{iconGlyph}</AppText>
        </View>
        <View style={styles.copy}>
          <AppText variant="heading" style={styles.title}>
            {title}
          </AppText>
          <AppText variant="caption" tone="secondary">
            {body}
          </AppText>
        </View>
      </View>

      <View style={styles.ctaRow}>
        <AppText variant="label" tone="pink">
          {cta}
        </AppText>
        <AppText tone="pink" style={styles.arrow}>
          →
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.md,
    gap: spacing.sm,
  },
  pressed: {
    opacity: 0.88,
  },
  eyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.xs,
  },
  eyebrow: {
    flex: 1,
    fontStyle: 'italic',
    fontSize: 12,
    lineHeight: 16,
  },
  badge: {
    fontSize: 16,
    lineHeight: 20,
  },
  bodyRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: colors.iconWash,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGlyph: {
    color: colors.heart,
    fontSize: 22,
    lineHeight: 26,
  },
  copy: {
    flex: 1,
    gap: 4,
    paddingTop: 2,
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.xxs,
  },
  arrow: {
    fontSize: 16,
    lineHeight: 20,
  },
});
