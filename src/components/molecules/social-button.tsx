import { Pressable, StyleSheet } from 'react-native';
import { SymbolView, type SymbolViewProps } from 'expo-symbols';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type SocialButtonProps = {
  readonly label: string;
  readonly icon: Extract<SymbolViewProps['name'], object>;
  readonly onPress: () => void;
};

export function SocialButton({ label, icon, onPress }: SocialButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <SymbolView tintColor={colors.text} name={icon} size={18} />
      <AppText variant="bodyMedium">{label}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 56,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  pressed: {
    opacity: 0.8,
  },
});
