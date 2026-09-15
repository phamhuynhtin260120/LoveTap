import { Pressable, StyleSheet } from 'react-native';

import { AppIcon, type AppIconName } from '@/components/atoms/app-icon';
import { colors, radius } from '@/theme';

export type IconButtonProps = {
  readonly name: AppIconName;
  readonly accessibilityLabel: string;
  readonly onPress?: () => void;
  readonly variant?: 'surface' | 'plain' | 'filled' | 'outline';
};

export function IconButton({
  name,
  accessibilityLabel,
  onPress,
  variant = 'surface',
}: IconButtonProps) {
  const tint =
    variant === 'filled' ? colors.textOnPrimary : variant === 'plain' ? colors.text : colors.textPink;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={({ pressed }) => [
        styles.hit,
        variant === 'plain' && styles.plain,
        variant === 'filled' && styles.filled,
        variant === 'outline' && styles.outline,
        pressed && styles.pressed,
      ]}>
      <AppIcon name={name} color={tint} size={18} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  plain: {
    backgroundColor: 'transparent',
  },
  filled: {
    backgroundColor: colors.avatarFill,
  },
  outline: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.7,
  },
});
