import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, shadows, spacing } from '@/theme';

export type ActionCardProps = {
  readonly title: string;
  readonly body: string;
  readonly onPress: () => void;
};

export function ActionCard({ title, body, onPress }: ActionCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.copy}>
        <AppText variant="heading">{title}</AppText>
        <AppText variant="caption" tone="secondary">
          {body}
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows?.card,
  },
  copy: {
    gap: spacing.xs,
  },
  pressed: {
    opacity: 0.85,
  },
});
