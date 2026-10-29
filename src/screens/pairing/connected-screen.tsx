import { useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { Avatar } from '@/components/atoms/avatar';
import { Icon } from '@/components/atoms/icon';
import { Breathe, Float } from '@/components/atoms/motion';
import { pairingCopy } from '@/data/copy';
import { colors, corner, elevation, gradient, gradients } from '@/theme';

const copy = pairingCopy.connected;
const CONFETTI_COUNT = 30;

export type ConnectedScreenProps = Record<string, never>;

/** 11 — Connection Success. */
export function ConnectedScreen(_props: ConnectedScreenProps) {
  const router = useRouter();
  const goHome = () => router.replace('/home');

  return (
    <View style={styles.screen}>
      <View pointerEvents="none" style={[StyleSheet.absoluteFill, gradient(gradients.connected)]} />
      <Confetti />

      <SafeAreaView style={styles.safe}>
        <View style={styles.main}>
          <View style={styles.visual}>
            <View style={[styles.line, gradient(gradients.connectedLine)]} />
            <Float direction="left" style={[styles.avatarSlot, styles.avatarLeft]}>
              <Avatar
                source={require('@/assets/images/mock/avatar-me.png')}
                size={96}
                borderWidth={4}
                style={styles.avatarShadow}
              />
            </Float>
            <Float direction="right" style={[styles.avatarSlot, styles.avatarRight]}>
              <Avatar
                source={require('@/assets/images/mock/avatar-partner.png')}
                size={96}
                borderWidth={4}
                style={styles.avatarShadow}
              />
            </Float>
            <Breathe duration={2000} scaleTo={1.1} opacityFrom={1} style={styles.heartWrap}>
              <View style={styles.heart}>
                <Icon name="favorite" filled size={32} color="primaryContainer" />
              </View>
            </Breathe>
          </View>

          <View style={styles.message}>
            <AppText variant="headlineLgMobile" color="primary" align="center" style={styles.title}>
              {copy.title}
            </AppText>
            <AppText variant="bodyLg" color="onSurfaceVariant" align="center">
              {copy.subtitle}
            </AppText>
          </View>

          <View style={styles.actions}>
            <AppButton
              label={copy.firstTap}
              icon="waving_hand"
              iconFilled
              iconSize={24}
              shadow="card"
              onPress={goHome}
            />
            <AppButton
              label={copy.later}
              variant="text"
              labelColor="secondary"
              onPress={goHome}
              style={styles.later}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

/** Mưa chấm tròn hồng rơi nhẹ phía sau (opacity 40%). */
function Confetti() {
  const { width, height } = useWindowDimensions();
  const [pieces] = useState(() =>
    Array.from({ length: CONFETTI_COUNT }, () => ({
      left: Math.random(),
      duration: 3000 + Math.random() * 3000,
      delay: Math.random() * 3000,
      progress: new Animated.Value(0),
    })),
  );

  useEffect(() => {
    const loops = pieces.map((p) =>
      Animated.loop(
        Animated.timing(p.progress, {
          toValue: 1,
          duration: p.duration,
          delay: p.delay,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ),
    );
    loops.forEach((l) => l.start());
    return () => loops.forEach((l) => l.stop());
  }, [pieces]);

  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.confetti]}>
      {pieces.map((p, i) => (
        <Animated.View
          key={i}
          style={[
            styles.dot,
            {
              left: p.left * width,
              transform: [
                {
                  translateY: p.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-10, height],
                  }),
                },
                {
                  rotate: p.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  safe: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    width: '100%',
    maxWidth: 448,
    alignSelf: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  visual: {
    width: '100%',
    height: 192,
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    left: '25%',
    right: '25%',
    top: 95,
    height: 2,
  },
  avatarSlot: {
    position: 'absolute',
    top: 48,
    zIndex: 2,
  },
  avatarLeft: {
    left: 32,
  },
  avatarRight: {
    right: 32,
  },
  avatarShadow: {
    boxShadow: elevation.card,
  },
  heartWrap: {
    zIndex: 3,
  },
  heart: {
    padding: 8,
    borderRadius: corner.full,
    backgroundColor: colors.surface,
    boxShadow: elevation.heartGlow,
  },
  message: {
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
  },
  actions: {
    width: '100%',
  },
  later: {
    marginTop: 16,
  },
  confetti: {
    opacity: 0.4,
  },
  dot: {
    position: 'absolute',
    top: 0,
    width: 8,
    height: 8,
    borderRadius: corner.full,
    backgroundColor: colors.primaryContainer,
  },
});
