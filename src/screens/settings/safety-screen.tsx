import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { PrivacyNote } from '@/components/molecules/privacy-note';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, settingsGroups } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

export function SafetySettingsScreen() {
  const group = settingsGroups[2];

  return (
    <PhoneShell>
      <ScreenHeader title={group.title} />
      <View style={styles.body}>
        <AppText variant="body" tone="secondary">
          {group.subtitle}
        </AppText>
        <View style={styles.row}>
          <AppText variant="label">{copy.lockFaceId}</AppText>
          <AppText variant="caption" tone="pink">
            {copy.toggleOn}
          </AppText>
        </View>
        <View style={styles.row}>
          <AppText variant="label">{copy.endToEnd}</AppText>
          <AppText variant="caption" tone="pink">
            {copy.toggleOn}
          </AppText>
        </View>
        <PrivacyNote text={copy.privacyNote} />
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.md,
    gap: spacing.md,
  },
  row: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
