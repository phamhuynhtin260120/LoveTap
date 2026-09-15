import { StyleSheet, View, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing } from '@/theme';

export type ScreenProps = ViewProps & {
  readonly padded?: boolean;
};

export function Screen({ children, style, padded = true, ...rest }: ScreenProps) {
  return (
    <SafeAreaView style={[styles.safe, style]} edges={['top', 'bottom']} {...rest}>
      <View style={[styles.body, padded && styles.padded]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: spacing.md,
  },
});
