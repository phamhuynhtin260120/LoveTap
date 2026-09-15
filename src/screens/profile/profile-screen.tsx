import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { ActionCard } from '@/components/molecules/action-card';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { Screen } from '@/components/organisms/screen';
import { couple, settingsGroups } from '@/data/mock';
import { spacing } from '@/theme';

export type ProfileScreenProps = Record<string, never>;

export function ProfileScreen(_props: ProfileScreenProps) {
  return (
    <Screen padded={false}>
      <ScreenHeader title="Cài đặt" />
      <View style={styles.body}>
        <AppText variant="caption" tone="pink">
          Phòng đôi #{couple.roomCode}
        </AppText>
        <AppText variant="heading">
          {couple.selfName} & {couple.partnerName}
        </AppText>
        {settingsGroups.map((group) => (
          <ActionCard
            key={group.id}
            title={group.title}
            body={group.subtitle}
            onPress={() => undefined}
          />
        ))}
      </View>
    </Screen>
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
