import { Pressable, StyleSheet } from 'react-native';
import { SymbolView, type SymbolViewProps } from 'expo-symbols';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius } from '@/theme';

export type IconButtonProps = {
  readonly icon: Extract<SymbolViewProps['name'], object>;
  readonly accessibilityLabel: string;
  readonly onPress?: () => void;
  readonly variant?: 'surface' | 'plain' | 'filled' | 'outline';
  readonly fallback?: string;
};

export function IconButton({
  icon,
  accessibilityLabel,
  onPress,
  variant = 'surface',
  fallback = '•',
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
      <SymbolView
        tintColor={tint}
        name={icon}
        size={18}
        fallback={
          <AppText style={{ color: tint, fontSize: 16, lineHeight: 20 }}>{fallback}</AppText>
        }
      />
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
