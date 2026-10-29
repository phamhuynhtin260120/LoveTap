import { Text, type StyleProp, type TextStyle } from 'react-native';

import { type ColorToken } from '@/components/atoms/app-text';
import { colors } from '@/theme';
import { ICON_FONT_FAMILY, ICON_FONT_FAMILY_FILLED } from '@/theme/fonts';

export type IconProps = {
  /** Tên icon Material Symbols, ví dụ `arrow_back`, `favorite`, `content_copy`. */
  readonly name: string;
  readonly size?: number;
  /** Biến thể tô đặc (FILL 1 trong thiết kế). */
  readonly filled?: boolean;
  readonly color?: ColorToken;
  /** Màu tùy ý (khi không có trong bảng token). */
  readonly tint?: string;
  readonly style?: StyleProp<TextStyle>;
};

/** Icon Material Symbols (Outlined) — đúng bộ icon dùng trong thiết kế Stitch. */
export function Icon({
  name,
  size = 24,
  filled = false,
  color = 'onSurface',
  tint,
  style,
}: IconProps) {
  return (
    <Text
      accessible={false}
      importantForAccessibility="no"
      allowFontScaling={false}
      style={[
        {
          fontFamily: filled ? ICON_FONT_FAMILY_FILLED : ICON_FONT_FAMILY,
          fontSize: size,
          lineHeight: size,
          width: size,
          height: size,
          textAlign: 'center',
          color: tint ?? colors[color],
        },
        style,
      ]}>
      {name}
    </Text>
  );
}
