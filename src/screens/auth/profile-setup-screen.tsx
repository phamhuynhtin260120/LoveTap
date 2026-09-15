import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppInput } from '@/components/atoms/app-input';
import { AppText } from '@/components/atoms/app-text';
import { HeartMark } from '@/components/atoms/heart-mark';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { Screen } from '@/components/organisms/screen';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export type ProfileSetupScreenProps = Record<string, never>;

export function ProfileSetupScreen(_props: ProfileSetupScreenProps) {
  const router = useRouter();

  return (
    <Screen padded={false}>
      <ScreenHeader title="" />
      <View style={styles.body}>
        <View style={styles.hero}>
          <HeartMark size={40} />
          <AppText variant="title" align="center">
            {copy.profileTitle}
          </AppText>
          <AppText variant="body" tone="secondary" align="center">
            {copy.profileSubtitle}
          </AppText>
        </View>
        <AppInput label="Tên của bạn" placeholder="Nguyễn Văn A" />
        <AppInput label="Người ấy sẽ gọi bạn là gì?" placeholder="Bé / Mèo con" />
        <View style={styles.footer}>
          <AppButton label={copy.continue} onPress={() => router.push('/connect')} />
        </View>
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
  footer: {
    marginTop: 'auto',
    paddingBottom: spacing.xl,
  },
});
