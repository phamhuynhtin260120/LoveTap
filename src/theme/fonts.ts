/**
 * Bộ icon Material Symbols Outlined (wght 400, opsz 24, GRAD 0) — đúng bộ icon của thiết kế.
 * Hai bản tĩnh được tách từ font biến thiên chính thức của Google
 * (github.com/google/material-design-icons/variablefont): FILL 0 (viền) và FILL 1 (tô đặc).
 * Dùng ligature: `<Text style={{ fontFamily }}>favorite</Text>`.
 */
export const ICON_FONT_FAMILY = 'MaterialSymbolsOutlined';
/** Bản tô đặc (FILL 1 trong thiết kế). */
export const ICON_FONT_FAMILY_FILLED = 'MaterialSymbolsOutlinedFilled';

/** Toàn bộ font cần nạp trước khi ẩn splash (RootLayout). */
export const appFonts = {
  // Quicksand (Google Fonts, OFL) — tách tĩnh từ Quicksand[wght].ttf, mỗi độ đậm một family.
  Quicksand_400Regular: require('@/assets/fonts/Quicksand_400Regular.ttf'),
  Quicksand_500Medium: require('@/assets/fonts/Quicksand_500Medium.ttf'),
  Quicksand_600SemiBold: require('@/assets/fonts/Quicksand_600SemiBold.ttf'),
  Quicksand_700Bold: require('@/assets/fonts/Quicksand_700Bold.ttf'),
  [ICON_FONT_FAMILY]: require('@/assets/fonts/MaterialSymbolsOutlined.ttf'),
  [ICON_FONT_FAMILY_FILLED]: require('@/assets/fonts/MaterialSymbolsOutlinedFilled.ttf'),
};
