import { StyleSheet, TextInput, type TextInputProps, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing, typography } from '@/theme';

export type AppInputProps = TextInputProps & {
  readonly label?: string;
};

export function AppInput({ label, style, ...rest }: AppInputProps) {
  return (
    <View style={styles.wrap}>
      {label ? (
        <AppText variant="caption" tone="secondary">
          {label}
        </AppText>
      ) : null}
      <TextInput
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, style]}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: spacing.xs,
  },
  input: {
    ...typography.body,
    minHeight: 56,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    color: colors.text,
  },
});
