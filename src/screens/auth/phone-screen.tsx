import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppInput } from '@/components/atoms/app-input';
import { AppText } from '@/components/atoms/app-text';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export function PhoneScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title="" showProfile={false} />
      <View style={styles.body}>
        <AppText variant="title" tone="pink">
          {copy.phoneTitle}
        </AppText>
        <AppText variant="body" tone="secondary">
          {copy.phoneSubtitle}
        </AppText>
        <AppInput
          accessibilityLabel={copy.phonePlaceholder}
          placeholder={copy.phonePlaceholder}
          keyboardType="phone-pad"
        />
        <View style={styles.footer}>
          <AppButton label={copy.continue} onPress={() => router.push('/otp')} />
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
