import { Platform } from 'react-native';

/** Visual tokens extracted from the CHẠM Stitch board (light canvas). */
export const colors = {
  background: '#FFF6F3',
  backgroundWarm: '#FFF8F6',
  surface: '#FFFFFF',
  surfaceSoft: '#FDECEE',
  surfacePink: '#F7D4D4',
  primary: '#E07A7A',
  primaryPressed: '#C45C6A',
  primarySoft: '#FAD4D0',
  text: '#3A2A2A',
  textSecondary: '#9A7A7A',
  textPink: '#C45C6A',
  textOnPrimary: '#FFFFFF',
  border: '#F3D0D0',
  overlay: 'rgba(58, 42, 42, 0.06)',
  heart: '#EE7A86',
  splashDark: '#111111',
  online: '#E07A7A',
  avatarFill: '#8E4A51',
  heartWash: '#F8D5D8',
  iconWash: '#F4D0D4',
  nestWash: '#F8E6E2',
  privacyWash: '#F9E4E2',
  photoPeach: '#E8A090',
  photoRose: '#D97B7B',
  heroStart: '#F6B8B2',
  heroEnd: '#E88782',
  heroChip: 'rgba(255, 255, 255, 0.28)',
  heroMuted: 'rgba(255, 255, 255, 0.86)',
  statusPill: '#F8E0E0',
  createTap: '#F4D0D4',
  createTapInk: '#C45C6A',
  tileWash: '#F8E6E6',
  photoHighlight: '#F3C2B4',
} as const;

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radius = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 28,
  full: 999,
} as const;

export const typography = {
  display: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700' as const,
    letterSpacing: 2,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700' as const,
  },
  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700' as const,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
  },
  bodyMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600' as const,
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400' as const,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600' as const,
  },
  code: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700' as const,
    letterSpacing: 3,
  },
} as const;

export const fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    rounded: 'ui-rounded',
    serif: 'ui-serif',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'sans-serif',
    rounded: 'sans-serif-medium',
    serif: 'serif',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    rounded: 'var(--font-rounded)',
    serif: 'var(--font-serif)',
    mono: 'var(--font-mono)',
  },
});

export const shadows = Platform.select({
  ios: {
    card: {
      shadowColor: '#C45C6A',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
    },
  },
  android: {
    card: {
      elevation: 3,
    },
  },
  default: {
    card: {
      elevation: 3,
    },
  },
});
