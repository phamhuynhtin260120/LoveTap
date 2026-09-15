import { ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { ConnectionOptionCard } from '@/components/molecules/connection-option-card';
import { NestNote } from '@/components/molecules/nest-note';
import { PrivacyNote } from '@/components/molecules/privacy-note';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

export function ConnectScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title={copy.connectTitle} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <View style={styles.heartWrap}>
            <AppText style={styles.heartGlyph}>♥</AppText>
          </View>
          <AppText variant="heading" align="center" style={styles.headline}>
            {copy.connectHeadline}
          </AppText>
          <AppText variant="caption" tone="secondary" align="center" style={styles.subtitle}>
            {copy.connectSubtitle}
          </AppText>
        </View>
        <ConnectionOptionCard
          eyebrow={copy.createSpaceEyebrow}
          title={copy.createSpaceTitle}
          body={copy.createSpaceBody}
          cta={copy.createSpaceCta}
          iconGlyph="⌖"
          badgeGlyph="⊕"
          onPress={() => router.push('/invite')}
        />
        <ConnectionOptionCard
          eyebrow={copy.joinSpaceEyebrow}
          title={copy.joinSpaceTitle}
          body={copy.joinSpaceBody}
          cta={copy.joinSpaceCta}
          iconGlyph="▦"
          badgeGlyph="∞"
          onPress={() => router.push('/join')}
        />
        <NestNote title={copy.nestTitle} body={copy.nestBody} />
        <PrivacyNote text={copy.privacyNote} />
      </ScrollView>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
    gap: spacing.sm,
  },
  hero: {
    alignItems: 'center',
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    gap: spacing.xs,
  },
  heartWrap: {
    width: 56,
    height: 56,
    borderRadius: radius.full,
    backgroundColor: colors.heartWash,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartGlyph: {
    color: colors.heart,
    fontSize: 26,
    lineHeight: 30,
  },
  headline: {
    fontSize: 26,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 280,
  },
});
