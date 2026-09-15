import { Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, couple } from '@/data/mock';
import { TAB_BAR_INSET } from '@/navigation/app-tabs';
import { colors, radius, spacing } from '@/theme';

export function TogetherScreen() {
  const router = useRouter();

  return (
    <PhoneShell edges={['top']}>
      <View style={styles.body}>
        <AppText variant="heading">{copy.tabTogether}</AppText>
        <View style={styles.card}>
          <AppText variant="caption" tone="pink">
            {copy.coupleRoom} #{couple.roomCode}
          </AppText>
          <AppText variant="title">
            {couple.selfName} & {couple.partnerFullName}
          </AppText>
          <AppText variant="heading" tone="pink">
            {couple.daysTogether} {copy.daysTogetherLabel}
          </AppText>
          <AppText variant="caption" tone="secondary">
            {copy.anniversaryCaption}
          </AppText>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={copy.coupleProfile}
          onPress={() => router.push('/settings/couple')}>
          <AppText variant="label" tone="pink">
            {copy.coupleProfile} →
          </AppText>
        </Pressable>
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: spacing.xl,
    paddingBottom: TAB_BAR_INSET,
    gap: spacing.md,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.xs,
  },
});
