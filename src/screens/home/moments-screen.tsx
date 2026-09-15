import { ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { MemoryCard } from '@/components/molecules/memory-card';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, moments } from '@/data/mock';
import { spacing } from '@/theme';

export function MomentsScreen() {
  const router = useRouter();

  return (
    <PhoneShell edges={['top']}>
      <View style={styles.head}>
        <AppText variant="heading">{copy.tabMoments}</AppText>
        <AppText variant="caption" tone="secondary">
          {copy.anniversaryCaption}
        </AppText>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {moments.map((moment) => (
          <MemoryCard
            key={moment.id}
            title={moment.title}
            quote={moment.quote}
            caption={moment.caption}
            onPress={() => router.push('/moment/428')}
          />
        ))}
      </ScrollView>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  head: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    gap: spacing.xxs,
  },
  body: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});
