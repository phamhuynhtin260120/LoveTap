import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type PrivacyNoteProps = {
  readonly text: string;
};

export function PrivacyNote({ text }: PrivacyNoteProps) {
  return (
    <View style={styles.row}>
      <View style={styles.dot}>
        <AppText style={styles.heart}>♥</AppText>
      </View>
      <AppText variant="caption" tone="secondary" style={styles.text}>
        {text}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.privacyWash,
    borderRadius: radius.full,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  dot: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});
