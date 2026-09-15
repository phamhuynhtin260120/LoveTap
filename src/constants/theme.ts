/**
 * Compatibility layer for leftover starter components.
 * New screens should import from `@/theme`.
 */
import '@/global.css';

import { colors, fonts as ChamFonts, spacing as ChamSpacing } from '@/theme';

export const Colors = {
  light: {
    text: colors.text,
    background: colors.background,
    backgroundElement: colors.surfaceSoft,
    backgroundSelected: colors.primarySoft,
    textSecondary: colors.textSecondary,
  },
  dark: {
    text: colors.textOnPrimary,
    background: colors.splashDark,
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: colors.textSecondary,
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = ChamFonts;

export const Spacing = {
  half: ChamSpacing.xxs,
  one: ChamSpacing.xxs,
  two: ChamSpacing.xs,
  three: ChamSpacing.md,
  four: ChamSpacing.xl,
  five: ChamSpacing.xxl,
  six: ChamSpacing.xxxl,
} as const;

export const BottomTabInset = 0;
export const MaxContentWidth = 800;
