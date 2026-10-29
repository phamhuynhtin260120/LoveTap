import { Platform } from 'react-native';

/**
 * Design tokens của CHẠM — đồng bộ 1:1 với design system trên Stitch
 * (Material 3 palette "Chạm", font Quicksand, spacing 4pt).
 * Nguồn: .stitch/designs/*.html (tailwind.config).
 */
export const colors = {
  // ---- Stitch / Material 3 palette ----
  primary: '#a13d3f',
  onPrimary: '#ffffff',
  primaryContainer: '#f47c7c',
  onPrimaryContainer: '#6c151c',
  primaryFixed: '#ffdad8',
  primaryFixedDim: '#ffb3b1',
  secondary: '#855051',
  onSecondary: '#ffffff',
  secondaryContainer: '#ffbbbb',
  onSecondaryContainer: '#7b4849',
  secondaryFixed: '#ffdad9',
  secondaryFixedDim: '#f9b5b5',
  onSecondaryFixed: '#350f11',
  onSecondaryFixedVariant: '#69393a',
  tertiary: '#65587f',
  tertiaryContainer: '#a899c4',
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  background: '#fff8f9',
  onBackground: '#2a1423',
  surface: '#fff8f9',
  surfaceBright: '#fff8f9',
  surfaceDim: '#f4d0e5',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#fff0f6',
  surfaceContainer: '#ffe8f3',
  surfaceContainerHigh: '#ffe0f1',
  surfaceContainerHighest: '#fdd8ed',
  surfaceVariant: '#fdd8ed',
  onSurface: '#2a1423',
  onSurfaceVariant: '#564241',
  outline: '#897170',
  outlineVariant: '#dcc0bf',
  inverseSurface: '#412939',
  inverseOnSurface: '#ffecf5',

  // ---- Màu tùy biến dùng trực tiếp trong các màn Stitch ----
  /** Nền ô nhập liệu "soft input". */
  inputSurface: '#FFFDFC',
  /** Viền ô nhập liệu "soft input". */
  inputBorder: '#FFD7C2',
  /** Nền ấm của màn Nhập mã (09) / Splash. */
  warmCanvas: '#FFF9F5',
  /** Chữ thương hiệu đậm trên Splash. */
  brandInk: '#452D3D',
  /** Tagline Splash. */
  brandMuted: '#806B78',
  /** Điểm cuối của gradient nút "pillowy". */
  primaryGradientEnd: '#F8B4B4',

  // ---- Legacy (các màn Home/Profile cũ, sẽ thay dần) ----
  legacyBackground: '#FFF6F3',
  backgroundWarm: '#FFF8F6',
  legacySurface: '#FFFFFF',
  surfaceSoft: '#FDECEE',
  surfacePink: '#F7D4D4',
  legacyPrimary: '#E07A7A',
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

/** Spacing Stitch (tailwind spacing, đơn vị 4pt). */
export const space = {
  unit: 4,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  gutter: 16,
  marginMobile: 20,
} as const;

/** Bo góc Stitch (tailwind borderRadius) + các giá trị tùy biến hay dùng. */
export const corner = {
  sm: 4,
  lg: 8,
  xl: 12,
  /** rounded-2xl */
  xxl: 16,
  /** rounded-[20px] */
  card: 20,
  /** rounded-[24px] */
  cardLg: 24,
  full: 9999,
} as const;

/** Spacing legacy (Home/Profile cũ). */
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

/** Tên font Quicksand đã nạp ở RootLayout (mỗi độ đậm là một family riêng). */
export const fontFamilies = {
  regular: 'Quicksand_400Regular',
  medium: 'Quicksand_500Medium',
  semibold: 'Quicksand_600SemiBold',
  bold: 'Quicksand_700Bold',
} as const;

/** Thang chữ Stitch (tailwind fontSize). */
export const typography = {
  // ---- Stitch type scale ----
  display: {
    fontFamily: fontFamilies.bold,
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -0.8,
  },
  headlineLg: {
    fontFamily: fontFamilies.semibold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.32,
  },
  headlineLgMobile: {
    fontFamily: fontFamilies.semibold,
    fontSize: 24,
    lineHeight: 32,
  },
  headlineMd: {
    fontFamily: fontFamilies.semibold,
    fontSize: 24,
    lineHeight: 32,
  },
  bodyLg: {
    fontFamily: fontFamilies.medium,
    fontSize: 18,
    lineHeight: 28,
  },
  bodyMd: {
    fontFamily: fontFamilies.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  labelMd: {
    fontFamily: fontFamilies.semibold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
  },
  labelSm: {
    fontFamily: fontFamilies.medium,
    fontSize: 12,
    lineHeight: 16,
  },

  // ---- Legacy (Home/Profile cũ) ----
  title: {
    fontFamily: fontFamilies.bold,
    fontSize: 28,
    lineHeight: 34,
  },
  heading: {
    fontFamily: fontFamilies.bold,
    fontSize: 22,
    lineHeight: 28,
  },
  body: {
    fontFamily: fontFamilies.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fontFamilies.semibold,
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: fontFamilies.regular,
    fontSize: 13,
    lineHeight: 18,
  },
  label: {
    fontFamily: fontFamilies.semibold,
    fontSize: 14,
    lineHeight: 20,
  },
  code: {
    fontFamily: fontFamilies.bold,
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 3,
  },
} as const;

/** Bóng đổ dùng chung (cú pháp CSS box-shadow, RN >= 0.76). */
export const elevation = {
  /** shadow-[0_8px_24px_rgba(69,45,61,0.06)] — thẻ, nút, ô nhập. */
  card: '0px 8px 24px rgba(69, 45, 61, 0.06)',
  /** shadow-[0_12px_32px_rgba(69,45,61,0.06)]. */
  cardLg: '0px 12px 32px rgba(69, 45, 61, 0.06)',
  /** shadow-[0_8px_24px_rgba(69,45,61,0.08)]. */
  cardStrong: '0px 8px 24px rgba(69, 45, 61, 0.08)',
  /** shadow-[0_8px_24px_rgba(69,45,61,0.04)]. */
  cardSoft: '0px 8px 24px rgba(69, 45, 61, 0.04)',
  /** shadow-[0_1px_8px_rgba(69,45,61,0.04)] — thanh header. */
  header: '0px 1px 8px rgba(69, 45, 61, 0.04)',
  /** shadow-[0_8px_20px_rgba(244,124,124,0.35)] — nút gradient nổi bật. */
  glow: '0px 8px 20px rgba(244, 124, 124, 0.35)',
  /** 0 4px 12px rgba(69,45,61,0.08) — .btn-pillowy. */
  button: '0px 4px 12px rgba(69, 45, 61, 0.08)',
  /** shadow-sm của Tailwind. */
  sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  /** shadow-md của Tailwind. */
  md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
  /** Logo Splash. */
  logo: '0px 8px 32px rgba(0, 0, 0, 0.05)',
  /** Trái tim phát sáng (11). */
  heartGlow: '0px 8px 24px rgba(244, 124, 124, 0.3)',
  /** Viền sáng khi ô nhập được focus. */
  focusRing: '0px 0px 0px 4px rgba(244, 124, 124, 0.1)',
} as const;

/** Gradient (cú pháp CSS), dùng qua helper `gradient()` trong theme/gradient.ts. */
export const gradients = {
  /** Nút "pillowy": linear-gradient(180deg, #F47C7C, #F8B4B4). */
  primaryButton: 'linear-gradient(180deg, #F47C7C 0%, #F8B4B4 100%)',
  /** Splash: from-[#FFF9F5] to-[#FFFDFC]. */
  splash: 'linear-gradient(180deg, #FFF9F5 0%, #FFFDFC 100%)',
  /** Màn 11: from-surface-container-low to-background, opacity 50%. */
  connected: 'linear-gradient(180deg, rgba(255, 240, 246, 0.5) 0%, rgba(255, 248, 249, 0.5) 100%)',
  /** Đường nối 2 avatar ở màn 11. */
  connectedLine:
    'linear-gradient(90deg, rgba(220, 192, 191, 0.3) 0%, #f47c7c 50%, rgba(220, 192, 191, 0.3) 100%)',
  /** Viền avatar màn 08: bg-gradient-to-tr from-primary-container to-secondary-container. */
  avatarRing: 'linear-gradient(45deg, #f47c7c 0%, #ffbbbb 100%)',
} as const;

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
