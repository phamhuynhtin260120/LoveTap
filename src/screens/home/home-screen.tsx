import { ScrollView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { IconButton } from '@/components/atoms/icon-button';
import { ActivityRow } from '@/components/molecules/activity-row';
import { CreateTapButton } from '@/components/molecules/create-tap-button';
import { MemoryCard } from '@/components/molecules/memory-card';
import { QuickAction } from '@/components/molecules/quick-action';
import { SectionHeading } from '@/components/molecules/section-heading';
import { StatusPill } from '@/components/molecules/status-pill';
import { TapHero } from '@/components/molecules/tap-hero';
import { Screen } from '@/components/organisms/screen';
import { copy, couple, quickActions, recentTaps } from '@/data/mock';
import { colors, radius, spacing } from '@/theme';

export type HomeScreenProps = Record<string, never>;

export function HomeScreen(_props: HomeScreenProps) {
  const router = useRouter();

  return (
    <Screen padded={false} edges={['top']} style={styles.screen}>
      <View style={styles.phone}>
        <View style={styles.header}>
          <AppText variant="heading" tone="pink" style={styles.wordmark}>
            {copy.brandWordmark}
          </AppText>
          <View style={styles.headerActions}>
            <IconButton
              variant="outline"
              accessibilityLabel="Yêu thích"
              fallback="♡"
              icon={{ ios: 'heart' }}
            />
            <IconButton
              variant="filled"
              accessibilityLabel="Hồ sơ"
              fallback="☺"
              icon={{ ios: 'person.fill' }}
              onPress={() => router.push('/profile')}
            />
          </View>
        </View>

        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <View style={styles.greetingRow}>
            <View style={styles.greetingCopy}>
              <View style={styles.eyebrowRow}>
                <AppText style={styles.eyebrowGlyph}>♡♡</AppText>
                <AppText variant="caption" tone="pink" style={styles.eyebrow}>
                  {copy.homeEyebrow}
                </AppText>
              </View>
              <AppText variant="title" style={styles.greeting}>
                {copy.homeGreeting}
              </AppText>
            </View>
            <View style={styles.partner}>
              <View style={styles.photo} accessibilityLabel={couple.partnerFullName}>
                <View style={[styles.blob, styles.blobBack]} />
                <View style={[styles.blob, styles.blobFront]} />
              </View>
              <AppText variant="caption" style={styles.partnerName}>
                {couple.partnerFullName}
              </AppText>
              <AppText variant="caption" tone="pink" style={styles.distance}>
                ⌖ {couple.distanceLabel}
              </AppText>
            </View>
          </View>

          <StatusPill text={couple.statusLine} />

          <TapHero
            chip={copy.homeHeroChip}
            title={copy.homeHeroTitle}
            body={copy.homeHeroBody}
            hint={copy.homeHeroHint}
          />

          <SectionHeading title={copy.quickActionsLabel} actionLabel={copy.quickActionsLink} />
          <View style={styles.grid}>
            {quickActions.map((action) => (
              <QuickAction
                key={action.id}
                title={action.title}
                subtitle={action.subtitle}
                iconGlyph={action.iconGlyph}
              />
            ))}
          </View>

          <CreateTapButton label={copy.createTap} />

          <SectionHeading
            title={copy.recentTapsLabel}
            actionLabel={`${copy.recentTapsLink} >`}
          />
          <View style={styles.feed}>
            {recentTaps.map((tap) => (
              <ActivityRow
                key={tap.id}
                actor={tap.actor}
                title={tap.title}
                time={tap.time}
                status={tap.status}
                incoming={tap.incoming}
              />
            ))}
          </View>

          <SectionHeading title={copy.anniversaryLabel} />
          <MemoryCard
            title={copy.anniversaryTitle}
            quote={copy.anniversaryQuote}
            caption={copy.anniversaryCaption}
          />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
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
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xxs,
  },
  wordmark: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
  },
  headerActions: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
    gap: spacing.md,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.sm,
    paddingTop: spacing.xs,
  },
  greetingCopy: {
    flex: 1,
    gap: spacing.xxs,
    paddingTop: 2,
  },
  eyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  eyebrowGlyph: {
    color: colors.heart,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: -2,
  },
  eyebrow: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  },
  greeting: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
  },
  partner: {
    width: 72,
    alignItems: 'center',
    gap: 2,
  },
  photo: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    backgroundColor: colors.photoPeach,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  blob: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: radius.full,
  },
  blobBack: {
    left: 8,
    top: 12,
    backgroundColor: colors.photoRose,
  },
  blobFront: {
    right: 8,
    top: 14,
    backgroundColor: colors.photoHighlight,
  },
  partnerName: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  distance: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  feed: {
    gap: spacing.sm,
    marginTop: -spacing.xs,
  },
});
