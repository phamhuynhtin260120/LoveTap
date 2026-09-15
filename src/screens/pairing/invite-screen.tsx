import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { CoupleCode } from '@/components/molecules/couple-code';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, couple } from '@/data/mock';
import { spacing } from '@/theme';

export function InviteScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title={copy.connectTitle} />
      <View style={styles.body}>
        <AppText variant="title" align="center">
          {copy.inviteHeadline}
        </AppText>
        <AppText variant="body" tone="secondary" align="center">
          {copy.inviteSubtitle}
        </AppText>
        <CoupleCode code={couple.roomCode} label={copy.coupleCodeLabel} />
        <View style={styles.actions}>
          <AppButton label={copy.copyCode} onPress={() => router.push('/waiting')} />
          <AppButton label={copy.shareInvite} variant="secondary" onPress={() => router.push('/waiting')} />
          <AppButton label={copy.showQr} variant="ghost" onPress={() => router.push('/qr')} />
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
