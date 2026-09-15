import { Text, type TextProps, type TextStyle } from 'react-native';

import { colors, fonts, typography } from '@/theme';

const variants = {
  display: typography.display,
  title: typography.title,
  heading: typography.heading,
  body: typography.body,
  bodyMedium: typography.bodyMedium,
  caption: typography.caption,
  label: typography.label,
  code: typography.code,
} as const;

const toneColors = {
  primary: colors.text,
  secondary: colors.textSecondary,
  pink: colors.textPink,
  onPrimary: colors.textOnPrimary,
} as const;

export type AppTextProps = TextProps & {
  readonly variant?: keyof typeof variants;
  readonly tone?: keyof typeof toneColors;
  readonly align?: TextStyle['textAlign'];
};

export function AppText({
  variant = 'body',
  tone = 'primary',
  align = 'left',
  style,
  ...rest
}: AppTextProps) {
  return (
    <Text
      style={[
        variants[variant],
        {
          color: toneColors[tone],
          fontFamily: fonts?.rounded,
          textAlign: align,
        },
        style,
      ]}
      {...rest}
    />
  );
}
