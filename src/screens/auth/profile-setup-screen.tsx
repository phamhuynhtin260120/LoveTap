import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { BackButton } from '@/components/atoms/back-button';
import { Icon } from '@/components/atoms/icon';
import { SoftInput } from '@/components/atoms/soft-input';
import { onboardingCopy } from '@/data/copy';
import { colors, corner, elevation, gradient } from '@/theme';

const copy = onboardingCopy.profile;

export type ProfileSetupScreenProps = Record<string, never>;

/** 06 — Profile Setup. */
export function ProfileSetupScreen(_props: ProfileSetupScreenProps) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.back}>
          <BackButton color="onSurfaceVariant" />
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.main}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.hero}>
            <AppText variant="headlineLgMobile" color="primary" align="center" style={styles.title}>
              {copy.title}
            </AppText>
            <AppText variant="bodyMd" color="onSurfaceVariant" align="center">
              {copy.subtitle}
            </AppText>
          </View>

          <Pressable accessibilityRole="button" accessibilityLabel="Chọn ảnh đại diện" style={styles.avatarPicker}>
            <View style={styles.avatar}>
              <Icon name="person" size={64} color="secondaryFixedDim" />
            </View>
            <View style={styles.cameraButton}>
              <Icon name="camera_alt" size={20} color="onPrimary" />
            </View>
          </Pressable>

          <View style={styles.form}>
            <View style={styles.field}>
              <AppText variant="labelMd" color="onSurfaceVariant" style={styles.label}>
                {copy.nameLabel}
              </AppText>
              <SoftInput placeholder={copy.namePlaceholder} textContentType="name" autoComplete="name" />
            </View>
            <View style={styles.field}>
              <AppText variant="labelMd" color="onSurfaceVariant" style={styles.label}>
                {copy.nicknameLabel}
              </AppText>
              <SoftInput placeholder={copy.nicknamePlaceholder} />
              <AppText variant="labelSm" style={styles.hint}>
                {copy.nicknameHint}
              </AppText>
            </View>
          </View>
        </ScrollView>

        <SafeAreaView
          edges={['bottom']}
          style={[
            styles.footer,
            gradient('linear-gradient(0deg, #fff8f9 0%, rgba(255, 248, 249, 0.9) 50%, rgba(255, 248, 249, 0) 100%)'),
          ]}>
          <View style={styles.footerInner}>
            <AppButton
              label={copy.submit}
              icon="arrow_forward"
              iconSize={18}
              iconPosition="end"
              shadow="button"
              onPress={() => router.push('/connect')}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  header: {
    height: 64,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginLeft: -8,
  },
  main: {
    width: '100%',
    maxWidth: 448,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 120,
    alignItems: 'center',
  },
  hero: {
    width: '100%',
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
  },
  avatarPicker: {
    marginBottom: 32,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainer,
    borderWidth: 4,
    borderColor: colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: elevation.card,
  },
  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 40,
    height: 40,
    borderRadius: corner.full,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.md,
  },
  form: {
    width: '100%',
    gap: 24,
  },
  field: {
    gap: 8,
  },
  label: {
    paddingHorizontal: 4,
  },
  hint: {
    paddingHorizontal: 4,
    color: 'rgba(86, 66, 65, 0.7)',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerInner: {
    width: '100%',
    maxWidth: 448,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
  },
});
