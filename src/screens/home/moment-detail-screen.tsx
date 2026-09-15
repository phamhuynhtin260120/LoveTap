import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { MemoryCard } from '@/components/molecules/memory-card';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, moments } from '@/data/mock';
import { spacing } from '@/theme';

export function MomentDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const moment = moments.find((item) => item.id === id) ?? moments[0];

  return (
    <PhoneShell>
      <ScreenHeader title={copy.tabMoments} />
      <View style={styles.body}>
        <MemoryCard title={moment.title} quote={moment.quote} caption={moment.caption} />
        <AppText variant="body" tone="secondary">
          {moment.quote}
        </AppText>
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.md,
    gap: spacing.md,
  },
});
