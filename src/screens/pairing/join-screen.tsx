import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { BackButton } from '@/components/atoms/back-button';
import { Icon } from '@/components/atoms/icon';
import { pairingCopy } from '@/data/copy';
import { colors, corner, elevation, typography } from '@/theme';

const copy = pairingCopy.join;
/** Mã kết nối dạng CHAM-XXXX (8 ký tự chữ/số, không tính dấu gạch). */
const CODE_PATTERN = /^CHAM-[A-Z0-9]{4}$/;

/** Chuẩn hóa mã người dùng gõ: in hoa, tự chèn dấu "-" sau "CHAM". */
function normalizeCode(raw: string) {
  const compact = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
  return compact.length > 4 ? `${compact.slice(0, 4)}-${compact.slice(4)}` : compact;
}

export type JoinScreenProps = Record<string, never>;

/** 09 — Enter invitation code. */
export function JoinScreen(_props: JoinScreenProps) {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [focused, setFocused] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const submit = () => {
    if (!CODE_PATTERN.test(code)) {
      setInvalid(true);
      return;
    }
    router.replace('/connected');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <BackButton size={48} />
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
              <AppText variant="headlineLgMobile" color="onSurface" align="center" style={styles.title}>
                {copy.title}
              </AppText>
              <AppText variant="bodyMd" color="onSurfaceVariant" align="center">
                {copy.subtitle}
              </AppText>
            </View>

            <View style={styles.inputArea}>
              <View style={[styles.inputCard, focused && styles.inputCardFocused]}>
                <TextInput
                  value={code}
                  onChangeText={(t) => {
                    setCode(normalizeCode(t));
                    setInvalid(false);
                  }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onSubmitEditing={submit}
                  autoCapitalize="characters"
                  autoCorrect={false}
                  maxLength={9}
                  placeholder={copy.placeholder}
                  placeholderTextColor="rgba(86, 66, 65, 0.3)"
                  selectionColor={colors.primaryContainer}
                  accessibilityLabel={copy.title}
                  returnKeyType="done"
                  style={styles.input}
                />
              </View>
              <AppText
                variant="labelSm"
                color="error"
                align="center"
                style={[styles.error, !invalid && styles.hidden]}>
                {copy.error}
              </AppText>
            </View>

            <View style={styles.actions}>
              <AppButton
                label={copy.submit}
                icon="favorite"
                iconPosition="end"
                shadow="card"
                onPress={submit}
              />
              <AppButton
                label={copy.scanQr}
                variant="soft"
                icon="qr_code_scanner"
                style={styles.scan}
              />
            </View>

            <View style={styles.decor}>
              <Icon name="auto_awesome" filled size={36} color="primaryContainer" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.warmCanvas,
  },
  flex: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  main: {
    width: '100%',
    maxWidth: 448,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 128,
  },
  hero: {
    width: '100%',
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
  },
  inputArea: {
    width: '100%',
    marginBottom: 32,
  },
  inputCard: {
    backgroundColor: colors.inputSurface,
    borderRadius: corner.cardLg,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    boxShadow: elevation.card,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inputCardFocused: {
    borderColor: colors.primaryContainer,
    boxShadow: `${elevation.focusRing}, ${elevation.card}`,
  },
  input: {
    ...typography.headlineMd,
    width: '100%',
    textAlign: 'center',
    color: colors.primary,
    letterSpacing: 4.8,
    paddingVertical: 0,
  },
  error: {
    marginTop: 8,
  },
  hidden: {
    opacity: 0,
  },
  actions: {
    width: '100%',
    gap: 16,
  },
  scan: {
    marginTop: 8,
  },
  decor: {
    marginTop: 96,
    opacity: 0.3,
  },
});
