import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, spacing } from '@/theme';

export type SectionHeadingProps = {
  readonly title: string;
  readonly actionLabel?: string;
  readonly onPressAction?: () => void;
};

export function SectionHeading({ title, actionLabel, onPressAction }: SectionHeadingProps) {
  return (
    <View style={styles.row}>
      <AppText variant="caption" tone="secondary" style={styles.title}>
        {title}
      </AppText>
      {actionLabel ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={actionLabel}
          onPress={onPressAction}
          hitSlop={8}>
          <AppText variant="caption" tone="pink" style={styles.action}>
            {actionLabel}
          </AppText>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.sm,
    paddingBottom: spacing.xxs,
  },
  title: {
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.8,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  action: {
    fontSize: 12,
    lineHeight: 16,
  },
});
