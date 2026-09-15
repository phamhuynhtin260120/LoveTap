import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { ActionCard } from '@/components/molecules/action-card';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, couple, settingsGroups } from '@/data/mock';
import { spacing } from '@/theme';

export function ProfileScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title={copy.settingsTitle} showProfile={false} />
      <View style={styles.body}>
        <AppText variant="caption" tone="pink">
          {copy.coupleRoom} #{couple.roomCode}
        </AppText>
        <AppText variant="heading">
          {couple.selfName} & {couple.partnerName}
        </AppText>
        <ActionCard
          title={copy.coupleProfile}
          body={`${couple.daysTogether} ${copy.daysTogetherLabel}`}
          onPress={() => router.push('/settings/couple')}
        />
        {settingsGroups.map((group) => (
          <ActionCard
            key={group.id}
            title={group.title}
            body={group.subtitle}
            onPress={() => router.push(group.href)}
          />
        ))}
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: spacing.md,
    gap: spacing.md,
    paddingTop: spacing.sm,
  },
});
