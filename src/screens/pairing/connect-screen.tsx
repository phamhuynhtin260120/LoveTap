import { ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { IconButton } from '@/components/atoms/icon-button';
import { ConnectionOptionCard } from '@/components/molecules/connection-option-card';
import { NestNote } from '@/components/molecules/nest-note';
import { PrivacyNote } from '@/components/molecules/privacy-note';
import { Screen } from '@/components/organisms/screen';
import { copy } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

export type ConnectScreenProps = Record<string, never>;

export function ConnectScreen(_props: ConnectScreenProps) {
  const router = useRouter();

  return (
    <Screen padded={false} style={styles.screen}>
      <View style={styles.phone}>
        <View style={styles.header}>
        <IconButton
          variant="plain"
          fallback="‹"
          accessibilityLabel="Quay lại"
          icon={{ ios: 'chevron.left' }}
          onPress={() => router.back()}
        />
        <AppText variant="label" style={styles.headerTitle}>
          {copy.connectTitle}
        </AppText>
        <IconButton
          variant="filled"
          fallback="☺"
          accessibilityLabel="Hồ sơ"
          icon={{ ios: 'person.fill' }}
          onPress={() => router.push('/profile')}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <View style={styles.heartWrap}>
            <AppText style={styles.heartGlyph} accessibilityLabel="Trái tim">
              ♥
            </AppText>
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
          onPress={() => router.push('/waiting')}
        />

        <NestNote title={copy.nestTitle} body={copy.nestBody} />
        <PrivacyNote text={copy.privacyNote} />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.backgroundWarm,
  },
  phone: {
    flex: 1,
    width: '100%',
    maxWidth: 390,
    alignSelf: 'center',
    backgroundColor: colors.backgroundWarm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
  },
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
    marginBottom: spacing.xxs,
  },
  heartGlyph: {
    color: colors.heart,
    fontSize: 26,
    lineHeight: 30,
  },
  headline: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 280,
  },
});
