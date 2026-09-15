import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppInput } from '@/components/atoms/app-input';
import { AppText } from '@/components/atoms/app-text';
import { HeartMark } from '@/components/atoms/heart-mark';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export function ProfileSetupScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title="" showProfile={false} />
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
        <AppInput label={copy.profileNameLabel} placeholder={copy.profileNamePlaceholder} />
        <AppInput label={copy.profileNickLabel} placeholder={copy.profileNickPlaceholder} />
        <View style={styles.footer}>
          <AppButton label={copy.continue} onPress={() => router.push('/connect')} />
        </View>
      </View>
    </PhoneShell>
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
