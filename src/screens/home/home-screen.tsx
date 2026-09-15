import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { HeartMark } from '@/components/atoms/heart-mark';
import { IconButton } from '@/components/atoms/icon-button';
import { QuickAction } from '@/components/molecules/quick-action';
import { Screen } from '@/components/organisms/screen';
import { copy, couple, quickActions } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

export type HomeScreenProps = Record<string, never>;

export function HomeScreen(_props: HomeScreenProps) {
  const router = useRouter();

  return (
    <Screen padded={false}>
      <View style={styles.header}>
        <AppText variant="heading" tone="pink">
          {copy.brandWordmark}
        </AppText>
        <View style={styles.headerActions}>
          <IconButton
            accessibilityLabel="Yêu thích"
            icon={{ ios: 'heart', android: 'favorite_border', web: 'favorite' }}
          />
          <IconButton
            accessibilityLabel="Hồ sơ"
            icon={{ ios: 'person', android: 'person', web: 'person' }}
            onPress={() => router.push('/profile')}
          />
        </View>
      </View>

      <View style={styles.body}>
        <AppText variant="caption" tone="secondary">
          Kết nối đồng điệu
        </AppText>
        <AppText variant="title">{copy.homeGreeting}</AppText>
        <AppText variant="caption" tone="secondary">
          {couple.partnerFullName} · {couple.distanceLabel}
        </AppText>
        <AppText variant="caption" tone="pink">
          {couple.statusLine}
        </AppText>

        <View style={styles.hero}>
          <HeartMark size={48} />
          <AppText variant="heading" align="center">
            {copy.homeHeroTitle}
          </AppText>
          <AppText variant="body" tone="secondary" align="center">
            {copy.homeHeroBody}
          </AppText>
          <AppText variant="caption" tone="pink" align="center">
            {copy.homeHeroHint}
          </AppText>
        </View>

        <AppText variant="label" tone="secondary">
          {copy.quickActionsLabel}
        </AppText>
        <View style={styles.grid}>
          {quickActions.map((action) => (
            <QuickAction key={action.id} title={action.title} subtitle={action.subtitle} />
          ))}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  headerActions: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing.md,
    gap: spacing.xs,
  },
  hero: {
    marginTop: spacing.md,
    marginBottom: spacing.md,
    backgroundColor: colors.surfacePink,
    borderRadius: radius.xl,
    padding: spacing.xxl,
    alignItems: 'center',
    gap: spacing.sm,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
});
