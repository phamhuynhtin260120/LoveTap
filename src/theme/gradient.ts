import type { ViewStyle } from 'react-native';

/**
 * Trả về style nền gradient bằng cú pháp CSS (`linear-gradient(...)`,
 * `radial-gradient(...)`), hỗ trợ native từ React Native 0.76 (New Architecture).
 * Gom về một chỗ để nếu RN đổi tên thuộc tính thì chỉ cần sửa tại đây.
 */
export function gradient(css: string): ViewStyle {
  return { experimental_backgroundImage: css } as ViewStyle;
}
