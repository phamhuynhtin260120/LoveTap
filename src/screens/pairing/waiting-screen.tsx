import { useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AmbientGlow } from '@/components/atoms/ambient-glow';
import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { Avatar } from '@/components/atoms/avatar';
import { Icon } from '@/components/atoms/icon';
import { Ping, Pulse } from '@/components/atoms/motion';
import { PairingHeader } from '@/components/molecules/pairing-header';
import { WaveThread } from '@/components/molecules/wave-thread';
import { pairingCopy } from '@/data/copy';
import { couple } from '@/data/mock';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { colors, corner, elevation, fontFamilies } from '@/theme';

const copy = pairingCopy.waiting;

export type WaitingScreenProps = Record<string, never>;

/** 10 — Waiting for Partner. */
export function WaitingScreen(_props: WaitingScreenProps) {
  const router = useRouter();
  const clipboard = useCopyToClipboard();

  // Giả lập: người ấy nhập mã sau vài giây → mở màn "Hai bạn đã kết nối!".
  useEffect(() => {
    const timer = setTimeout(() => router.replace('/connected'), couple.partnerJoinDelayMs);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <PairingHeader title={pairingCopy.headerTitle} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hai avatar và sợi chỉ kết nối */}
        <View style={styles.visual}>
          <AmbientGlow color="rgba(253, 216, 237, 0.4)" width={256} height={128} top={16} left={32} />
          <View style={styles.person}>
            <View style={styles.meRing}>
              <Avatar source={require('@/assets/images/mock/avatar-me-waiting.png')} size={72} />
              <View style={styles.meBadge}>
                <Icon name="favorite" filled size={13} color="onPrimary" />
              </View>
            </View>
            <AppText variant="labelSm" color="onSurface" style={styles.meLabel}>
              {copy.me}
            </AppText>
          </View>

          <View style={styles.thread}>
            <WaveThread />
            <View style={styles.syncNode}>
              <Pulse>
                <Icon name="sync" filled size={18} color="primaryContainer" />
              </Pulse>
            </View>
          </View>

          <View style={styles.person}>
            <View style={styles.partner}>
              <Ping style={styles.partnerPing} />
              <View style={styles.partnerInner}>
                <Icon name="hourglass_top" size={22} color="secondary" />
              </View>
            </View>
            <Pulse>
              <AppText variant="labelSm" color="secondary" style={styles.waitingLabel}>
                {copy.waiting}
              </AppText>
            </Pulse>
          </View>
        </View>

        <View style={styles.message}>
          <AppText variant="headlineLgMobile" color="onSurface" align="center" style={styles.title}>
            {copy.title}
          </AppText>
          <AppText variant="bodyMd" color="onSurfaceVariant" align="center" style={styles.subtitle}>
            {copy.subtitle}
          </AppText>
        </View>

        {/* Thẻ mã kết nối */}
        <View style={styles.codeCard}>
          <AmbientGlow color="rgba(255, 224, 241, 0.6)" width={112} height={112} top={-48} right={-48} />
          <View style={styles.codeLabelRow}>
            <Icon name="key" size={16} color="secondary" />
            <AppText variant="labelSm" color="secondary" style={styles.codeLabel}>
              {copy.codeLabel.toUpperCase()}
            </AppText>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Nhấn để sao chép"
            onPress={() => void clipboard.copy(couple.roomCode)}
            style={({ pressed }) => [styles.codeBox, pressed && styles.pressed]}>
            <View>
              <AppText variant="labelSm" color="onSurfaceVariant">
                {copy.shareLabel}
              </AppText>
              <AppText color="primary" style={styles.code}>
                {couple.roomCode}
              </AppText>
            </View>
            <View style={styles.copyBadge}>
              <Icon name={clipboard.copied ? 'check' : 'content_copy'} size={20} color="primary" />
            </View>
          </Pressable>

          <View style={styles.timerPill}>
            <Icon name="schedule" size={16} color="secondary" />
            <AppText variant="labelSm" color="onSurfaceVariant">
              {copy.remaining}
            </AppText>
          </View>

          <AppText
            variant="labelSm"
            color="primary"
            align="center"
            style={[styles.copied, !clipboard.copied && styles.hidden]}>
            {copy.copied}
          </AppText>
        </View>

        <View style={styles.actions}>
          <AppButton
            label={copy.resend}
            icon="send"
            paddingVertical={14}
            shadow="glow"
            onPress={() => router.back()}
          />
          <AppButton
            label={copy.cancel}
            variant="text"
            labelColor="onSurfaceVariant"
            paddingVertical={10}
            onPress={() => router.replace('/connect')}
            style={styles.cancel}
          />
        </View>

        <View style={styles.tip}>
          <View style={styles.tipIcon}>
            <Icon name="favorite" size={18} color="secondary" />
          </View>
          <AppText variant="labelSm" color="onSurfaceVariant" style={styles.tipText}>
            {copy.tip}
          </AppText>
        </View>

        <View style={styles.footer}>
          <Icon name="lock" size={14} color="secondary" />
          <AppText variant="labelSm" color="secondary">
            {copy.privacy}
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
    alignItems: 'center',
  },
  visual: {
    width: '100%',
    maxWidth: 320,
    height: 160,
    marginVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  person: {
    alignItems: 'center',
  },
  meRing: {
    width: 80,
    height: 80,
    borderRadius: corner.full,
    padding: 4,
    backgroundColor: colors.surfaceContainerLow,
    boxShadow: elevation.cardStrong,
  },
  meBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    borderRadius: corner.full,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.sm,
  },
  meLabel: {
    marginTop: 8,
    fontFamily: fontFamilies.semibold,
  },
  thread: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  syncNode: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.sm,
  },
  partner: {
    width: 80,
    height: 80,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.cardSoft,
  },
  partnerPing: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: corner.full,
    backgroundColor: 'rgba(253, 216, 237, 0.3)',
  },
  partnerInner: {
    width: 40,
    height: 40,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainerHigh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitingLabel: {
    marginTop: 8,
  },
  message: {
    marginTop: 12,
    maxWidth: 384,
  },
  title: {
    letterSpacing: -0.6,
  },
  subtitle: {
    marginTop: 8,
    paddingHorizontal: 8,
    lineHeight: 26,
  },
  codeCard: {
    width: '100%',
    maxWidth: 384,
    marginTop: 24,
    padding: 24,
    borderRadius: corner.cardLg,
    backgroundColor: colors.surfaceContainerLowest,
    boxShadow: elevation.cardLg,
    alignItems: 'center',
    overflow: 'hidden',
  },
  codeLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  codeLabel: {
    fontFamily: fontFamilies.semibold,
    letterSpacing: 0.6,
  },
  codeBox: {
    marginTop: 16,
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: corner.xl,
    backgroundColor: colors.surfaceContainerLow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  code: {
    fontFamily: fontFamilies.bold,
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: 2.6,
  },
  copyBadge: {
    width: 40,
    height: 40,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.sm,
  },
  timerPill: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainer,
  },
  copied: {
    marginTop: 8,
  },
  hidden: {
    opacity: 0,
  },
  actions: {
    width: '100%',
    maxWidth: 384,
    marginTop: 24,
    gap: 12,
  },
  cancel: {
    opacity: 0.8,
  },
  tip: {
    width: '100%',
    maxWidth: 384,
    marginTop: 24,
    padding: 16,
    borderRadius: corner.card,
    backgroundColor: colors.surfaceContainerLow,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  tipIcon: {
    width: 32,
    height: 32,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainerHigh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipText: {
    flex: 1,
    paddingTop: 4,
    lineHeight: 19.5,
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    opacity: 0.6,
  },
});
