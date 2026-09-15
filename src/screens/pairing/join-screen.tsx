import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppInput } from '@/components/atoms/app-input';
import { AppText } from '@/components/atoms/app-text';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export function JoinScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title={copy.connectTitle} />
      <View style={styles.body}>
        <AppText variant="title" align="center">
          {copy.joinHeadline}
        </AppText>
        <AppText variant="body" tone="secondary" align="center">
          {copy.joinSubtitle}
        </AppText>
        <AppInput
          accessibilityLabel={copy.joinPlaceholder}
          placeholder={copy.joinPlaceholder}
          autoCapitalize="characters"
        />
        <View style={styles.actions}>
          <AppButton label={copy.continue} onPress={() => router.push('/waiting')} />
          <AppButton label={copy.scanQr} variant="ghost" onPress={() => router.push('/qr')} />
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
  actions: {
    gap: spacing.sm,
    marginTop: 'auto',
    paddingBottom: spacing.xl,
  },
});
