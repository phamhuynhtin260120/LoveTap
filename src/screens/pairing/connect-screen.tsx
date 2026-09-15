import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { HeartMark } from '@/components/atoms/heart-mark';
import { IconButton } from '@/components/atoms/icon-button';
import { ActionCard } from '@/components/molecules/action-card';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { Screen } from '@/components/organisms/screen';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export type ConnectScreenProps = Record<string, never>;

export function ConnectScreen(_props: ConnectScreenProps) {
  const router = useRouter();

  return (
    <Screen padded={false}>
      <ScreenHeader
        title={copy.connectTitle}
        trailing={
          <IconButton
            accessibilityLabel="Hồ sơ"
            icon={{ ios: 'person', android: 'person', web: 'person' }}
            onPress={() => router.push('/profile')}
          />
        }
      />
      <View style={styles.body}>
        <View style={styles.hero}>
          <HeartMark size={24} />
          <AppText variant="title" align="center">
            {copy.connectHeadline}
          </AppText>
          <AppText variant="body" tone="secondary" align="center">
            {copy.connectSubtitle}
          </AppText>
        </View>
        <ActionCard
          title={copy.createSpaceTitle}
          body={copy.createSpaceBody}
          onPress={() => router.push('/invite')}
        />
        <ActionCard
          title={copy.joinSpaceTitle}
          body={copy.joinSpaceBody}
          onPress={() => router.push('/waiting')}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: spacing.md,
    gap: spacing.md,
  },
  hero: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.lg,
  },
});
