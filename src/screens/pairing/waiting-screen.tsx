import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { HeartMark } from '@/components/atoms/heart-mark';
import { CoupleCode } from '@/components/molecules/couple-code';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, couple } from '@/data/mock';
import { spacing } from '@/theme';

export function WaitingScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title={copy.connectTitle} />
      <View style={styles.body}>
        <View style={styles.hero}>
          <HeartMark size={36} />
          <AppText variant="title" align="center">
            {copy.waitingHeadline}
          </AppText>
          <AppText variant="body" tone="secondary" align="center">
            {copy.waitingSubtitle}
          </AppText>
        </View>
        <CoupleCode code={couple.roomCode} label={copy.coupleCodeLabel} />
        <View style={styles.footer}>
          <AppButton label={copy.enterSpace} onPress={() => router.replace('/home')} />
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
    paddingVertical: spacing.xxl,
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: spacing.xl,
  },
});
