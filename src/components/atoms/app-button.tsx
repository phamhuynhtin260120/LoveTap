import { type ReactNode } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { AppText, type ColorToken } from '@/components/atoms/app-text';
import { Icon } from '@/components/atoms/icon';
import { colors, corner, elevation, gradient, gradients } from '@/theme';

type Variant = 'gradient' | 'surface' | 'tonal' | 'soft' | 'text';

const variantStyles: Record<Variant, { container: ViewStyle; label: ColorToken }> = {
  /** Nút "pillowy" gradient #F47C7C → #F8B4B4. */
  gradient: { container: gradient(gradients.primaryButton), label: 'onPrimary' },
  /** Nền sáng có viền mảnh (đăng nhập Apple/Google). */
  surface: {
    container: {
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: 'rgba(220, 192, 191, 0.3)',
    },
    label: 'onSurface',
  },
  /** Nền secondary-fixed (Gửi lời mời qua tin nhắn). */
  tonal: { container: { backgroundColor: colors.secondaryFixed }, label: 'onSecondaryFixed' },
  /** Nền #FFD7C2 30% (Quét mã QR). */
  soft: { container: { backgroundColor: 'rgba(255, 215, 194, 0.3)' }, label: 'onSurfaceVariant' },
  /** Chỉ chữ. */
  text: { container: { backgroundColor: 'transparent' }, label: 'primary' },
};

export type AppButtonProps = {
  readonly label: string;
  readonly onPress?: () => void;
  readonly variant?: Variant;
  /** `pill` = rounded-full, `rounded` = rounded-xl (12). */
  readonly shape?: 'pill' | 'rounded';
  /** Chiều cao cố định (vd. h-[56px]); mặc định tính theo `paddingVertical`. */
  readonly height?: number;
  readonly paddingVertical?: number;
  readonly icon?: string;
  /** Icon tùy biến (vd. logo Google) thay cho `icon`. */
  readonly leading?: ReactNode;
  readonly iconSize?: number;
  readonly iconFilled?: boolean;
  readonly iconPosition?: 'start' | 'end';
  /** Khoảng cách icon ↔ chữ. */
  readonly gap?: number;
  readonly shadow?: keyof typeof elevation;
  readonly labelColor?: ColorToken;
  readonly disabled?: boolean;
  readonly accessibilityLabel?: string;
  readonly style?: StyleProp<ViewStyle>;
};

export function AppButton({
  label,
  onPress,
  variant = 'gradient',
  shape = 'pill',
  height,
  paddingVertical = 16,
  icon,
  leading,
  iconSize = 20,
  iconFilled = false,
  iconPosition = 'start',
  gap = 8,
  shadow,
  labelColor,
  disabled = false,
  accessibilityLabel,
  style,
}: AppButtonProps) {
  const v = variantStyles[variant];
  const textColor = labelColor ?? v.label;
  const iconNode = leading ?? (icon ? (
    <Icon name={icon} size={iconSize} filled={iconFilled} color={textColor} />
  ) : null);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { borderRadius: shape === 'pill' ? corner.full : corner.xl },
        height != null ? { height } : { paddingVertical },
        v.container,
        shadow ? { boxShadow: elevation[shadow] } : null,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}>
      <View style={[styles.row, { gap }]}>
        {iconPosition === 'start' ? iconNode : null}
        <AppText variant="labelMd" color={textColor}>
          {label}
        </AppText>
        {iconPosition === 'end' ? iconNode : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.5,
  },
});
