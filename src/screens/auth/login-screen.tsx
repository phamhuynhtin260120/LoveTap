import { ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { onboardingCopy } from '@/data/copy';
import { colors, corner, elevation, gradient } from '@/theme';

const copy = onboardingCopy.login;

export type LoginScreenProps = Record<string, never>;

/** 03 — Login Screen. */
export function LoginScreen(_props: LoginScreenProps) {
  const router = useRouter();
  const continueToPhone = () => router.push('/phone');

  return (
    <View style={styles.screen}>
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          gradient('radial-gradient(ellipse at top right, rgba(253, 216, 237, 0.4) 0%, rgba(253, 216, 237, 0) 70%)'),
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          gradient('radial-gradient(ellipse at bottom left, rgba(255, 224, 241, 0.4) 0%, rgba(255, 224, 241, 0) 70%)'),
        ]}
      />

      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <View style={styles.hero}>
              <View style={styles.logoBubble}>
                <AppText variant="display" color="primary" style={styles.logoText} numberOfLines={1}>
                  {copy.brand}
                </AppText>
              </View>
              <AppText variant="headlineLgMobile" color="onSurface" align="center" style={styles.title}>
                {copy.title}
              </AppText>
              <AppText variant="bodyMd" color="onSurfaceVariant" align="center" style={styles.subtitle}>
                {copy.subtitle}
              </AppText>
            </View>

            <View style={styles.actions}>
              <AppButton
                label={copy.apple}
                variant="surface"
                shape="rounded"
                height={56}
                gap={16}
                icon="file_download"
                iconSize={24}
                shadow="card"
                onPress={continueToPhone}
              />
              <AppButton
                label={copy.google}
                variant="surface"
                shape="rounded"
                height={56}
                gap={16}
                leading={
                  <Image source={require('@/assets/images/google-g.png')} style={styles.googleIcon} />
                }
                shadow="card"
                onPress={continueToPhone}
              />

              <View style={styles.divider}>
                <View style={styles.line} />
                <AppText variant="labelSm" color="onSurfaceVariant" style={styles.or}>
                  {copy.or}
                </AppText>
                <View style={styles.line} />
              </View>

              <AppButton
                label={copy.phone}
                shape="rounded"
                height={56}
                gap={16}
                icon="phone_iphone"
                iconSize={24}
                shadow="card"
                onPress={continueToPhone}
              />
            </View>

            <AppText variant="labelSm" align="center" style={styles.terms}>
              {copy.termsPrefix}
              <AppText variant="labelSm" color="primary">
                {copy.terms}
              </AppText>
              {copy.termsJoin}
              <AppText variant="labelSm" color="primary">
                {copy.privacy}
              </AppText>
              {copy.termsSuffix}
            </AppText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safe: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    width: '100%',
    maxWidth: 448,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  hero: {
    marginBottom: 32,
    alignItems: 'center',
  },
  logoBubble: {
    width: 80,
    height: 80,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    boxShadow: elevation.card,
    overflow: 'visible',
  },
  logoText: {
    width: 200,
    textAlign: 'center',
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    maxWidth: 280,
  },
  actions: {
    width: '100%',
    gap: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(220, 192, 191, 0.3)',
  },
  or: {
    marginHorizontal: 16,
  },
  terms: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: 'rgba(86, 66, 65, 0.8)',
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
});
