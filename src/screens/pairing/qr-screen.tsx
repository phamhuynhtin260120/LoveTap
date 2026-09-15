import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, couple } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

export function QrScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title={copy.connectTitle} />
      <View style={styles.body}>
        <AppText variant="title" align="center">
          {copy.qrHeadline}
        </AppText>
        <AppText variant="body" tone="secondary" align="center">
          {copy.qrSubtitle}
        </AppText>
        <View style={styles.qr} accessibilityLabel={copy.qrA11y}>
          <View style={styles.qrInner} />
        </View>
        <AppText variant="code" tone="pink" align="center">
          {couple.roomCode}
        </AppText>
        <View style={styles.footer}>
          <AppButton label={copy.enterSpace} onPress={() => router.push('/waiting')} />
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
    alignItems: 'center',
  },
  qr: {
    width: 220,
    height: 220,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 8,
    borderColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.md,
  },
  qrInner: {
    width: 140,
    height: 140,
    backgroundColor: colors.surfaceSoft,
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    paddingBottom: spacing.xl,
  },
});
