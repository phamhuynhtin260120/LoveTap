import { Platform, Pressable, StyleSheet, View, type ViewStyle } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type TapHeroProps = {
  readonly chip: string;
  readonly title: string;
  readonly body: string;
  readonly hint: string;
  readonly onPress?: () => void;
};

const gradientFill = (
  Platform.OS === 'web'
    ? {
        backgroundImage: `linear-gradient(165deg, ${colors.heroStart} 0%, ${colors.heroEnd} 100%)`,
      }
    : { backgroundColor: colors.heroEnd }
) as ViewStyle;

export function TapHero({ chip, title, body, hint, onPress }: TapHeroProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [styles.card, gradientFill, pressed && styles.pressed]}>
      {Platform.OS !== 'web' ? <View pointerEvents="none" style={styles.orb} /> : null}
      <View style={styles.topRow}>
        <View style={styles.chip}>
          <AppText style={styles.chipGlyph}>⌁</AppText>
          <AppText style={styles.chipLabel}>{chip}</AppText>
        </View>
        <View style={styles.signal}>
          <AppText style={styles.signalGlyph}>〰</AppText>
        </View>
      </View>
      <View style={styles.heartWrap}>
        <AppText style={styles.heart}>♥</AppText>
      </View>
      <AppText variant="heading" align="center" style={styles.title}>
        {title} ♥
      </AppText>
      <AppText align="center" style={styles.body}>
        {body}
      </AppText>
      <AppText align="center" style={styles.hint}>
        {hint}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    alignItems: 'center',
    overflow: 'hidden',
    minHeight: 248,
  },
  pressed: {
    opacity: 0.92,
  },
  orb: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: colors.heroStart,
    top: -90,
    left: -50,
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.heroChip,
    borderRadius: radius.full,
    paddingVertical: 6,
    paddingHorizontal: spacing.sm,
  },
  chipGlyph: {
    color: colors.textOnPrimary,
    fontSize: 12,
    lineHeight: 14,
  },
  chipLabel: {
    color: colors.textOnPrimary,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
  },
  signal: {
    width: 32,
    height: 32,
    borderRadius: radius.full,
    backgroundColor: colors.heroChip,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signalGlyph: {
    color: colors.textOnPrimary,
    fontSize: 14,
    lineHeight: 16,
  },
  heartWrap: {
    width: 72,
    height: 72,
    borderRadius: radius.full,
    backgroundColor: colors.heroChip,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  heart: {
    color: colors.textOnPrimary,
    fontSize: 30,
    lineHeight: 34,
  },
  title: {
    color: colors.textOnPrimary,
    fontSize: 22,
    lineHeight: 28,
  },
  body: {
    color: colors.heroMuted,
    fontSize: 13,
    lineHeight: 18,
    maxWidth: 240,
    marginTop: spacing.xxs,
  },
  hint: {
    color: colors.heroMuted,
    fontSize: 11,
    lineHeight: 16,
    marginTop: spacing.xs,
  },
});
