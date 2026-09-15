import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type CreateTapButtonProps = {
  readonly label: string;
  readonly onPress?: () => void;
};

export function CreateTapButton({ label, onPress }: CreateTapButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <View style={styles.plus}>
        <AppText style={styles.plusGlyph}>+</AppText>
      </View>
      <AppText variant="bodyMedium" style={styles.label}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: radius.xl,
    backgroundColor: colors.createTap,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  pressed: {
    opacity: 0.88,
  },
  plus: {
    width: 22,
    height: 22,
    borderRadius: radius.full,
    backgroundColor: colors.createTapInk,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusGlyph: {
    color: colors.textOnPrimary,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
  },
  label: {
    color: colors.createTapInk,
  },
});
