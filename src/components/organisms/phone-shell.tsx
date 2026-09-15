import { StyleSheet, View, type ViewProps } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

import { Screen } from '@/components/organisms/screen';
import { colors } from '@/theme';

export type PhoneShellProps = ViewProps & {
  readonly edges?: readonly Edge[];
  readonly surface?: 'warm' | 'cream' | 'white';
};

export function PhoneShell({
  children,
  style,
  edges = ['top', 'bottom'],
  surface = 'warm',
  ...rest
}: PhoneShellProps) {
  const fill =
    surface === 'white'
      ? colors.surface
      : surface === 'cream'
        ? colors.background
        : colors.backgroundWarm;

  return (
    <Screen padded={false} edges={edges} style={styles.screen}>
      <View style={[styles.phone, { backgroundColor: fill }, style]} {...rest}>
        {children}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
  },
  phone: {
    flex: 1,
    width: '100%',
    maxWidth: 390,
    alignSelf: 'center',
  },
});
