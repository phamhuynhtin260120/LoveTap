import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { HeartMark } from '@/components/atoms/heart-mark';
import { SocialButton } from '@/components/molecules/social-button';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export function LoginScreen() {
  const router = useRouter();
  const continueToPhone = () => router.push('/phone');

  return (
    <PhoneShell>
      <View style={styles.hero}>
        <HeartMark size={22} />
        <AppText variant="display" tone="pink" align="center">
          {copy.brand}
        </AppText>
        <AppText variant="heading" align="center">
          {copy.loginHello}
        </AppText>
        <AppText variant="body" tone="secondary" align="center">
          {copy.loginSubtitle}
        </AppText>
      </View>
      <View style={styles.actions}>
        <SocialButton label={copy.continueApple} icon="apple" onPress={continueToPhone} />
        <SocialButton label={copy.continueGoogle} icon="google" onPress={continueToPhone} />
        <AppText variant="caption" tone="secondary" align="center">
          {copy.or}
        </AppText>
        <AppButton label={copy.continuePhone} onPress={continueToPhone} />
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  actions: {
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },
});
