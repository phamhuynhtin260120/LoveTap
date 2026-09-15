import { Pressable, StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { AppText } from '@/components/atoms/app-text';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { settingsGroups, themePalettes } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

const swatches = {
  primary: colors.primary,
  photoPeach: colors.photoPeach,
  mist: colors.mist,
  night: colors.night,
} as const;

export function ThemeSettingsScreen() {
  const [active, setActive] = useState<(typeof themePalettes)[number]['id']>('cream');
  const group = settingsGroups[1];

  return (
    <PhoneShell>
      <ScreenHeader title={group.title} />
      <View style={styles.body}>
        <AppText variant="body" tone="secondary">
          {group.subtitle}
        </AppText>
        <View style={styles.grid}>
          {themePalettes.map((palette) => (
            <Pressable
              key={palette.id}
              accessibilityRole="button"
              accessibilityState={{ selected: palette.id === active }}
              onPress={() => setActive(palette.id)}
              style={[styles.tile, palette.id === active && styles.selected]}>
              <View style={[styles.swatch, { backgroundColor: swatches[palette.swatch] }]} />
              <AppText variant="label">{palette.title}</AppText>
            </Pressable>
          ))}
        </View>
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.md,
    gap: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tile: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selected: {
    borderColor: colors.primary,
  },
  swatch: {
    height: 48,
    borderRadius: radius.md,
  },
});
