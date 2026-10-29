import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

import { AmbientGlow } from '@/components/atoms/ambient-glow';
import { AppText } from '@/components/atoms/app-text';
import { Breathe, FadeUp } from '@/components/atoms/motion';
import { onboardingCopy } from '@/data/copy';
import { colors, corner, elevation, gradient, gradients } from '@/theme';

/** Thời gian hiển thị splash trước khi tự chuyển sang Login (đủ cho animation fade-up). */
const SPLASH_DURATION_MS = 2800;

const copy = onboardingCopy.splash;

export type SplashScreenProps = Record<string, never>;

/** 02 — Splash Screen (Fixed Version). */
export function SplashScreen(_props: SplashScreenProps) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace('/login'), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={[styles.screen, gradient(gradients.splash)]}>
      <AmbientGlow color="rgba(244, 124, 124, 0.10)" width="60%" height="60%" top="-20%" right="-20%" />
      <AmbientGlow color="rgba(255, 187, 187, 0.10)" width="60%" height="60%" bottom="-20%" left="-20%" />
      <AmbientGlow color="rgba(244, 124, 124, 0.05)" width="100%" height="100%" top={0} left={0} />

      <View style={styles.main}>
        <FadeUp style={styles.logoWrap}>
          <Breathe>
            <View style={styles.logo}>
              <Image
                source={require('@/assets/images/logo.png')}
                style={styles.logoImage}
                contentFit="cover"
                accessibilityLabel="CHẠM Logo"
              />
            </View>
          </Breathe>
        </FadeUp>

        <FadeUp delay={300}>
          <AppText variant="display" color="brandInk" align="center" style={styles.brand}>
            {copy.brand}
          </AppText>
        </FadeUp>

        <FadeUp delay={600}>
          <AppText variant="bodyLg" color="brandMuted" align="center" style={styles.tagline}>
            {copy.tagline}
          </AppText>
        </FadeUp>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: colors.warmCanvas,
  },
  main: {
    width: '100%',
    maxWidth: 448,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrap: {
    marginBottom: 32,
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: corner.full,
    overflow: 'hidden',
    backgroundColor: colors.surfaceContainerLowest,
    boxShadow: elevation.logo,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  brand: {
    letterSpacing: 6,
    marginBottom: 16,
  },
  tagline: {
    maxWidth: 280,
    fontStyle: 'italic',
  },
});
