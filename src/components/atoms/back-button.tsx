import { Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { type ColorToken } from '@/components/atoms/app-text';
import { Icon } from '@/components/atoms/icon';
import { colors, corner } from '@/theme';

export type BackButtonProps = {
  /** `plain`: chỉ icon. `outlined`: nút tròn nền trắng có viền (màn 04). */
  readonly variant?: 'plain' | 'outlined';
  /** Kích thước vùng chạm (w-10 = 40, w-12 = 48). */
  readonly size?: number;
  readonly icon?: string;
  readonly color?: ColorToken;
  readonly onPress?: () => void;
};

export function BackButton({
  variant = 'plain',
  size = 40,
  icon = 'arrow_back',
  color = 'onSurface',
  onPress,
}: BackButtonProps) {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Quay lại"
      hitSlop={8}
      onPress={onPress ?? (() => router.back())}
      style={({ pressed }) => [
        styles.base,
        { width: size, height: size },
        variant === 'outlined' && styles.outlined,
        pressed && styles.pressed,
      ]}>
      <Icon name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: corner.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlined: {
    backgroundColor: colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: 'rgba(220, 192, 191, 0.3)',
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});
