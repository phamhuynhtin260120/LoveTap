import { Pressable, StyleSheet } from 'react-native';
import { SymbolView, type SymbolViewProps } from 'expo-symbols';

import { colors, radius } from '@/theme';

export type IconButtonProps = {
  readonly icon: Extract<SymbolViewProps['name'], object>;
  readonly accessibilityLabel: string;
  readonly onPress?: () => void;
};

export function IconButton({ icon, accessibilityLabel, onPress }: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={({ pressed }) => [styles.hit, pressed && styles.pressed]}>
      <SymbolView tintColor={colors.textPink} name={icon} size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  pressed: {
    opacity: 0.7,
  },
});
