import { Pressable, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { SkeletonScreenBody } from '@/components/molecules/skeleton-block';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

const titles: Record<string, string> = {
  home: copy.tabHome,
  moments: copy.tabMoments,
  together: copy.tabTogether,
  settings: copy.settingsTitle,
};

export function SkeletonScreen() {
  const { name } = useLocalSearchParams<{ name?: string }>();
  const router = useRouter();
  const key = name ?? 'home';

  return (
    <PhoneShell>
      <ScreenHeader title={titles[key] ?? copy.tabHome} showProfile={false} />
      <View style={styles.body}>
        <AppText variant="caption" tone="secondary">
          {copy.skeletonNote}
        </AppText>
        <SkeletonScreenBody />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={copy.enterSpace}
          onPress={() => router.replace('/home')}>
          <AppText variant="label" tone="pink">
            {copy.enterSpace}
          </AppText>
        </Pressable>
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: spacing.sm,
  },
});
