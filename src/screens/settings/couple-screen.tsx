import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, couple } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

export function CoupleSettingsScreen() {
  return (
    <PhoneShell>
      <ScreenHeader title={copy.coupleProfile} />
      <View style={styles.body}>
        <View style={styles.card}>
          <AppText variant="caption" tone="pink">
            #{couple.roomCode}
          </AppText>
          <AppText variant="title">
            {couple.selfName} & {couple.partnerFullName}
          </AppText>
          <AppText variant="heading" tone="pink">
            {couple.daysTogether} {copy.daysTogetherLabel}
          </AppText>
        </View>
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.xs,
  },
});
