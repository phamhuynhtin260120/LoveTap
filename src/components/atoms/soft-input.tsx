import { useState } from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { colors, corner, elevation, typography } from '@/theme';

export type SoftInputProps = TextInputProps;

/** Ô nhập "soft input" của thiết kế: nền #FFFDFC, viền #FFD7C2, sáng viền khi focus. */
export function SoftInput({ style, onFocus, onBlur, ...rest }: SoftInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      placeholderTextColor="rgba(86, 66, 65, 0.4)"
      selectionColor={colors.primaryContainer}
      onFocus={(e) => {
        setFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setFocused(false);
        onBlur?.(e);
      }}
      style={[styles.input, focused && styles.focused, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    ...typography.bodyLg,
    color: colors.onSurface,
    backgroundColor: colors.inputSurface,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: corner.xl,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  focused: {
    borderColor: colors.primaryContainer,
    boxShadow: elevation.focusRing,
  },
});
