import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppInput } from '@/components/atoms/app-input';
import { AppText } from '@/components/atoms/app-text';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export function OtpScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title="" showProfile={false} />
      <View style={styles.body}>
        <AppText variant="title" tone="pink">
          {copy.otpTitle}
        </AppText>
        <AppText variant="body" tone="secondary">
          {copy.otpSubtitle}
        </AppText>
        <AppInput
          accessibilityLabel={copy.otpPlaceholder}
          placeholder={copy.otpPlaceholder}
          keyboardType="number-pad"
          maxLength={6}
        />
        <View style={styles.footer}>
          <AppButton label={copy.continue} onPress={() => router.push('/profile-setup')} />
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
    paddingTop: spacing.lg,
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: spacing.xl,
  },
});
