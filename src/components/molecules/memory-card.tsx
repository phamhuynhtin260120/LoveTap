import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { copy } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

export type MemoryCardProps = {
  readonly title: string;
  readonly quote: string;
  readonly caption: string;
  readonly onPress?: () => void;
};

export function MemoryCard({ title, quote, caption, onPress }: MemoryCardProps) {
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && onPress ? styles.pressed : null]}>
      <View style={styles.photo} accessibilityLabel={copy.handsPhoto}>
        <View style={[styles.hand, styles.handBack]} />
        <View style={[styles.hand, styles.handFront]} />
      </View>
      <View style={styles.copy}>
        <AppText variant="label" style={styles.title}>
          {title}
        </AppText>
        <AppText variant="caption" style={styles.quote}>
          {quote}
        </AppText>
        <AppText variant="caption" tone="secondary" style={styles.caption}>
          {caption}
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.sm,
    shadowColor: colors.textPink,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  pressed: {
    opacity: 0.88,
  },
  photo: {
    width: 56,
    height: 56,
    borderRadius: radius.sm,
    backgroundColor: colors.photoPeach,
    overflow: 'hidden',
  },
  hand: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: radius.full,
  },
  handBack: {
    left: 8,
    top: 16,
    backgroundColor: colors.photoRose,
  },
  handFront: {
    right: 8,
    top: 18,
    backgroundColor: colors.photoHighlight,
  },
  copy: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
  },
  quote: {
    fontSize: 13,
    lineHeight: 18,
    fontStyle: 'italic',
    color: colors.text,
    fontWeight: '500',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
});
