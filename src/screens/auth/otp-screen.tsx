import { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AmbientGlow } from '@/components/atoms/ambient-glow';
import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { BackButton } from '@/components/atoms/back-button';
import { onboardingCopy } from '@/data/copy';
import { couple } from '@/data/mock';
import { colors, corner, elevation, typography } from '@/theme';

const copy = onboardingCopy.otp;
const OTP_LENGTH = 6;
const RESEND_SECONDS = 59;

export type OtpScreenProps = Record<string, never>;

/** 05 — OTP Verification. */
export function OtpScreen(_props: OtpScreenProps) {
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState('');
  const [focused, setFocused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const canResend = secondsLeft <= 0;
  const activeIndex = Math.min(code.length, OTP_LENGTH - 1);

  return (
    <SafeAreaView style={styles.safe}>
      <AmbientGlow color="rgba(253, 216, 237, 0.3)" width={260} height={260} top="-10%" left="-10%" />
      <AmbientGlow color="rgba(244, 124, 124, 0.1)" width={300} height={300} bottom="-10%" right="-10%" />

      <View style={styles.header}>
        <BackButton color="onSurfaceVariant" />
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <View style={styles.hero}>
              <AppText variant="display" color="primary" align="center" style={styles.brand}>
                {copy.brand}
              </AppText>
              <AppText variant="headlineLgMobile" color="onBackground" align="center" style={styles.title}>
                {copy.title}
              </AppText>
              <AppText variant="bodyMd" color="onSurfaceVariant" align="center">
                {copy.subtitle}
                {'\n'}
                <AppText variant="labelMd" color="primary">
                  {couple.phoneDisplay}
                </AppText>
              </AppText>
            </View>

            <View style={styles.card}>
              <Pressable
                accessibilityRole="none"
                onPress={() => inputRef.current?.focus()}
                style={styles.boxes}>
                {Array.from({ length: OTP_LENGTH }, (_, i) => (
                  <View
                    key={i}
                    style={[styles.box, focused && i === activeIndex && styles.boxFocused]}>
                    <AppText variant="headlineMd" color="onBackground" align="center">
                      {code[i] ?? ''}
                    </AppText>
                  </View>
                ))}
                <TextInput
                  ref={inputRef}
                  autoFocus
                  value={code}
                  onChangeText={(t) => setCode(t.replace(/\D/g, '').slice(0, OTP_LENGTH))}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  autoComplete="sms-otp"
                  maxLength={OTP_LENGTH}
                  caretHidden
                  accessibilityLabel={copy.title}
                  style={styles.hiddenInput}
                />
              </Pressable>

              <AppText variant="bodyMd" color="onSurfaceVariant" align="center">
                {copy.noCode}
              </AppText>
              <View style={styles.resendRow}>
                <Pressable
                  accessibilityRole="button"
                  disabled={!canResend}
                  onPress={() => setSecondsLeft(RESEND_SECONDS)}>
                  <AppText variant="labelMd" color="primary" style={!canResend && styles.dimmed}>
                    {copy.resend}
                  </AppText>
                </Pressable>
                {canResend ? null : (
                  <AppText variant="labelMd" color="onSurfaceVariant" style={styles.timer}>
                    ({`00:${String(secondsLeft).padStart(2, '0')}`})
                  </AppText>
                )}
              </View>
            </View>

            <AppButton
              label={copy.submit}
              shape="rounded"
              shadow="card"
              onPress={() => router.push('/profile-setup')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  flex: {
    flex: 1,
  },
  header: {
    height: 64,
    paddingHorizontal: 20,
    justifyContent: 'center',
    zIndex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 64,
  },
  main: {
    width: '100%',
    maxWidth: 448,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  hero: {
    marginBottom: 32,
    alignItems: 'center',
  },
  brand: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.inputSurface,
    borderRadius: corner.cardLg,
    padding: 24,
    marginBottom: 32,
    alignItems: 'center',
    boxShadow: elevation.card,
  },
  boxes: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 32,
  },
  box: {
    width: 48,
    height: 56,
    borderRadius: corner.lg,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputSurface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxFocused: {
    borderColor: colors.primaryContainer,
    boxShadow: elevation.focusRing,
  },
  hiddenInput: {
    ...typography.headlineMd,
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  resendRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  dimmed: {
    opacity: 0.5,
  },
  timer: {
    marginLeft: 4,
  },
});
