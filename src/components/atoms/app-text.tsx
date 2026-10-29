import { Text, type TextProps, type TextStyle } from 'react-native';

import { colors, typography } from '@/theme';

export type AppTextVariant = keyof typeof typography;
export type ColorToken = keyof typeof colors;

const toneColors = {
  primary: colors.text,
  secondary: colors.textSecondary,
  pink: colors.textPink,
  onPrimary: colors.textOnPrimary,
} as const;

export type AppTextProps = TextProps & {
  readonly variant?: AppTextVariant;
  /** Tông màu legacy (Home/Profile cũ). Màn mới dùng `color`. */
  readonly tone?: keyof typeof toneColors;
  /** Màu theo token của design system Stitch — ưu tiên hơn `tone`. */
  readonly color?: ColorToken;
  readonly align?: TextStyle['textAlign'];
};

export function AppText({
  variant = 'body',
  tone = 'primary',
  color,
  align = 'left',
  style,
  ...rest
}: AppTextProps) {
  return (
    <Text
      style={[
        typography[variant],
        { color: color ? colors[color] : toneColors[tone], textAlign: align },
        style,
      ]}
      {...rest}
    />
  );
}
