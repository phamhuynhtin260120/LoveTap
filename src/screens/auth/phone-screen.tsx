import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { BackButton } from '@/components/atoms/back-button';
import { Icon } from '@/components/atoms/icon';
import { onboardingCopy } from '@/data/copy';
import { colors, corner, elevation, typography } from '@/theme';

const copy = onboardingCopy.phone;

export type PhoneScreenProps = Record<string, never>;

/** 04 — Phone Number Screen. */
export function PhoneScreen(_props: PhoneScreenProps) {
  const router = useRouter();
  const [focused, setFocused] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.main}>
          <View style={styles.backRow}>
            <BackButton variant="outlined" />
          </View>

          <View style={styles.header}>
            <AppText variant="headlineLgMobile" color="primary" align="center">
              {copy.title}
            </AppText>
            <AppText variant="bodyMd" color="onSurfaceVariant" align="center" style={styles.subtitle}>
              {copy.subtitle}
            </AppText>
          </View>

          <View style={[styles.field, focused && styles.fieldFocused]}>
            <Pressable accessibilityRole="button" accessibilityLabel="Mã quốc gia" style={styles.country}>
              <AppText style={styles.flag}>{copy.countryFlag}</AppText>
              <AppText variant="labelMd" color="onSurface">
                {copy.countryCode}
              </AppText>
              <Icon name="arrow_drop_down" size={14} color="onSurfaceVariant" />
            </Pressable>
            <TextInput
              autoFocus
              value={phone}
              onChangeText={setPhone}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              autoComplete="tel"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              placeholder={copy.placeholder}
              placeholderTextColor="rgba(86, 66, 65, 0.5)"
              selectionColor={colors.primaryContainer}
              accessibilityLabel={copy.placeholder}
              style={styles.input}
            />
          </View>

          <View style={styles.footer}>
            <AppButton label={copy.submit} shadow="button" onPress={() => router.push('/otp')} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.inputSurface,
  },
  flex: {
    flex: 1,
  },
  main: {
    flex: 1,
    width: '100%',
    maxWidth: 448,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 24,
  },
  backRow: {
    marginBottom: 32,
  },
  header: {
    marginBottom: 32,
    gap: 16,
    alignItems: 'center',
  },
  subtitle: {
    maxWidth: 320,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    borderRadius: corner.card,
    backgroundColor: colors.inputSurface,
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  fieldFocused: {
    borderColor: colors.primaryContainer,
    boxShadow: elevation.focusRing,
  },
  country: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 8,
    paddingRight: 16,
    borderRadius: corner.lg,
    borderRightWidth: 1,
    borderRightColor: 'rgba(220, 192, 191, 0.5)',
  },
  flag: {
    fontSize: 20,
    lineHeight: 28,
  },
  input: {
    ...typography.bodyLg,
    flex: 1,
    color: colors.onSurface,
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 24,
  },
});
