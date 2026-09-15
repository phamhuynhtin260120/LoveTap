import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type StatusPillProps = {
  readonly text: string;
};

export function StatusPill({ text }: StatusPillProps) {
  return (
    <View style={styles.pill}>
      <AppText style={styles.heart}>♥</AppText>
      <AppText variant="caption" tone="pink" style={styles.text} numberOfLines={1}>
        {text}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.statusPill,
    borderRadius: radius.full,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
  },
  heart: {
    color: colors.heart,
    fontSize: 12,
    lineHeight: 16,
  },
  text: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  },
});
