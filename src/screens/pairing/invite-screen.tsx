import { useState } from 'react';
import { Modal, Pressable, ScrollView, Share, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AmbientGlow } from '@/components/atoms/ambient-glow';
import { AppButton } from '@/components/atoms/app-button';
import { AppText } from '@/components/atoms/app-text';
import { Avatar } from '@/components/atoms/avatar';
import { DashedLine } from '@/components/atoms/dashed-line';
import { Icon } from '@/components/atoms/icon';
import { Ping } from '@/components/atoms/motion';
import { PairingHeader } from '@/components/molecules/pairing-header';
import { QrPattern } from '@/components/molecules/qr-pattern';
import { Toast } from '@/components/molecules/toast';
import { pairingCopy } from '@/data/copy';
import { couple } from '@/data/mock';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { colors, corner, elevation, fontFamilies, gradient, gradients } from '@/theme';

const copy = pairingCopy.invite;

export type InviteScreenProps = Record<string, never>;

/** 08 — Create Invitation. */
export function InviteScreen(_props: InviteScreenProps) {
  const router = useRouter();
  const clipboard = useCopyToClipboard();
  const [qrVisible, setQrVisible] = useState(false);

  /** Sao chép mã, hiện toast rồi chuyển sang màn chờ người ấy. */
  const copyCode = async () => {
    await clipboard.copy(couple.roomCode);
    setTimeout(() => router.push('/waiting'), 1200);
  };

  const shareInvite = async () => {
    await Share.share({ message: copy.shareMessage(couple.roomCode) });
    router.push('/waiting');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <PairingHeader title={pairingCopy.headerTitle} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Thẻ minh họa kết nối */}
        <View style={styles.visualCard}>
          <AmbientGlow color="rgba(255, 224, 241, 0.4)" width={144} height={144} top={-48} right={-48} />
          <AmbientGlow color="rgba(255, 187, 187, 0.3)" width={128} height={128} bottom={-40} left={-40} />

          <View style={styles.visualText}>
            <AppText variant="headlineMd" color="onSurface" align="center">
              {copy.title}
            </AppText>
            <AppText variant="bodyMd" color="onSurfaceVariant" align="center" style={styles.visualBody}>
              {copy.subtitle}
            </AppText>
          </View>

          <View style={styles.bridge}>
            <View style={styles.person}>
              <View style={[styles.avatarRing, gradient(gradients.avatarRing)]}>
                <Avatar source={require('@/assets/images/mock/avatar-me-invite.png')} size={60} />
                <View style={styles.checkBadge}>
                  <Icon name="check" size={10} color="onPrimary" />
                </View>
              </View>
              <AppText variant="labelSm" color="onSurfaceVariant">
                {copy.me}
              </AppText>
            </View>

            <View style={styles.thread}>
              <DashedLine color={colors.secondaryFixed} />
              <View style={styles.heartNode}>
                <Ping style={styles.heartPing} />
                <View style={styles.heart}>
                  <Icon name="favorite" filled size={18} color="onPrimary" />
                </View>
              </View>
            </View>

            <View style={styles.person}>
              <View style={styles.partner}>
                <View style={styles.partnerInner}>
                  <Icon name="favorite_border" size={28} color="primary" />
                </View>
                <View style={styles.partnerDot}>
                  <Ping style={styles.partnerDotPing} />
                  <View style={styles.partnerDotCore} />
                </View>
              </View>
              <AppText variant="labelSm" color="onSurfaceVariant">
                {copy.partner}
              </AppText>
            </View>
          </View>
        </View>

        {/* Mã kết nối */}
        <View style={styles.codeCard}>
          <View style={styles.codeHeader}>
            <AppText variant="labelSm" color="primary" style={styles.codeLabel}>
              {copy.codeLabel.toUpperCase()}
            </AppText>
            <View style={styles.timerPill}>
              <Icon name="timer" size={14} color="secondary" />
              <AppText variant="labelSm" color="secondary">
                {copy.expiresIn}
              </AppText>
            </View>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={copy.copy}
            onPress={copyCode}
            style={styles.codeBox}>
            <View style={styles.codeTextWrap}>
              <AppText variant="headlineLg" color="primary" style={styles.code}>
                {couple.roomCode}
              </AppText>
              <AppText variant="labelSm" color="outline" style={styles.codeHint}>
                {copy.tapToCopy}
              </AppText>
            </View>
            <View style={styles.copyCircle}>
              <Icon name="content_copy" size={20} color="onSecondaryFixedVariant" />
            </View>
          </Pressable>

          <View style={styles.oneTime}>
            <Icon name="lock" size={16} color="outline" />
            <AppText variant="labelSm" color="onSurfaceVariant" style={styles.flex}>
              {copy.oneTime}
            </AppText>
          </View>
        </View>

        {/* Hành động */}
        <View style={styles.actions}>
          <AppButton
            label={copy.copy}
            icon="content_copy"
            iconFilled
            gap={4}
            shadow="glow"
            onPress={copyCode}
          />
          <AppButton label={copy.share} variant="tonal" icon="send" gap={4} onPress={shareInvite} />
          <AppButton
            label={copy.showQr}
            variant="text"
            icon="qr_code_2"
            iconSize={18}
            gap={4}
            paddingVertical={8}
            onPress={() => setQrVisible(true)}
            style={styles.qrLink}
          />
        </View>

        <View style={styles.note}>
          <View style={styles.noteIcon}>
            <Icon name="auto_awesome" size={18} color="primary" />
          </View>
          <AppText variant="labelSm" color="onSurfaceVariant" style={styles.noteText}>
            {copy.note}
          </AppText>
        </View>
      </ScrollView>

      <Modal visible={qrVisible} transparent animationType="fade" onRequestClose={() => setQrVisible(false)}>
        <Pressable style={styles.backdrop} onPress={() => setQrVisible(false)}>
          <Pressable style={styles.qrCard}>
            <View style={styles.qrClose}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Đóng"
                onPress={() => setQrVisible(false)}
                style={styles.closeButton}>
                <Icon name="close" size={18} color="onSurfaceVariant" />
              </Pressable>
            </View>
            <AppText variant="headlineMd" color="onSurface" align="center" style={styles.qrTitle}>
              {copy.qrTitle}
            </AppText>
            <AppText variant="labelSm" color="onSurfaceVariant" align="center" style={styles.qrSubtitle}>
              {copy.qrSubtitle}
            </AppText>
            <View style={styles.qrFrame}>
              <QrPattern size={176} color={colors.primary} />
              <View style={styles.qrCenter}>
                <View style={styles.qrHeart}>
                  <Icon name="favorite" filled size={16} color="primary" />
                </View>
              </View>
            </View>
            <AppText variant="headlineMd" color="primary" style={styles.qrCode}>
              {couple.roomCode}
            </AppText>
            <AppText variant="labelSm" color="outline" style={styles.qrValidity}>
              {copy.qrValidity}
            </AppText>
          </Pressable>
        </Pressable>
      </Modal>

      <Toast message={copy.copied} visible={clipboard.copied} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  flex: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  visualCard: {
    width: '100%',
    borderRadius: corner.xl,
    backgroundColor: colors.surfaceContainerLowest,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 24,
    boxShadow: elevation.card,
  },
  visualText: {
    width: '100%',
    marginBottom: 16,
    alignItems: 'center',
  },
  visualBody: {
    marginTop: 4,
    maxWidth: 320,
  },
  bridge: {
    width: '100%',
    maxWidth: 280,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  person: {
    alignItems: 'center',
    gap: 4,
  },
  avatarRing: {
    width: 64,
    height: 64,
    borderRadius: corner.full,
    padding: 2,
    boxShadow: elevation.md,
  },
  checkBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 16,
    height: 16,
    borderRadius: corner.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.sm,
  },
  thread: {
    flex: 1,
    marginHorizontal: 8,
    height: 32,
    justifyContent: 'center',
  },
  heartNode: {
    position: 'absolute',
    alignSelf: 'center',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartPing: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: corner.full,
    backgroundColor: 'rgba(244, 124, 124, 0.4)',
  },
  heart: {
    width: 36,
    height: 36,
    borderRadius: corner.full,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.md,
  },
  partner: {
    width: 64,
    height: 64,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainerHigh,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
  },
  partnerInner: {
    width: 56,
    height: 56,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  partnerDot: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 14,
    height: 14,
  },
  partnerDotPing: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: corner.full,
    backgroundColor: colors.primaryContainer,
    opacity: 0.75,
  },
  partnerDotCore: {
    width: 14,
    height: 14,
    borderRadius: corner.full,
    backgroundColor: colors.primary,
  },
  codeCard: {
    width: '100%',
    borderRadius: corner.xl,
    backgroundColor: colors.surfaceContainerLow,
    padding: 24,
    marginBottom: 24,
    boxShadow: elevation.cardSoft,
  },
  codeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  codeLabel: {
    fontFamily: fontFamilies.semibold,
    letterSpacing: 0.6,
  },
  timerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surfaceContainer,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: corner.full,
  },
  codeBox: {
    width: '100%',
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: corner.lg,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: elevation.sm,
  },
  codeTextWrap: {
    flex: 1,
  },
  code: {
    fontFamily: fontFamilies.bold,
    letterSpacing: 6.4,
  },
  codeHint: {
    marginTop: 4,
  },
  copyCircle: {
    width: 40,
    height: 40,
    borderRadius: corner.full,
    backgroundColor: colors.secondaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oneTime: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actions: {
    width: '100%',
    gap: 8,
  },
  qrLink: {
    marginTop: 4,
  },
  note: {
    marginTop: 24,
    width: '100%',
    borderRadius: corner.lg,
    backgroundColor: 'rgba(255, 224, 241, 0.4)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  noteIcon: {
    width: 36,
    height: 36,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noteText: {
    flex: 1,
    fontFamily: fontFamilies.regular,
    lineHeight: 19.5,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(65, 41, 57, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  qrCard: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: corner.xl,
    padding: 24,
    alignItems: 'center',
    boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
  },
  qrClose: {
    width: '100%',
    alignItems: 'flex-end',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrTitle: {
    marginBottom: 4,
  },
  qrSubtitle: {
    fontFamily: fontFamilies.regular,
    marginBottom: 16,
  },
  qrFrame: {
    padding: 16,
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: corner.lg,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
  },
  qrCenter: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrHeart: {
    width: 32,
    height: 32,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.md,
  },
  qrCode: {
    fontFamily: fontFamilies.bold,
    letterSpacing: 1.2,
  },
  qrValidity: {
    marginTop: 4,
  },
});
