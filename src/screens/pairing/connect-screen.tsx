import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText, type ColorToken } from '@/components/atoms/app-text';
import { Icon } from '@/components/atoms/icon';
import { PairingHeader } from '@/components/molecules/pairing-header';
import { pairingCopy } from '@/data/copy';
import { colors, corner, elevation } from '@/theme';

const copy = pairingCopy.connect;

export type ConnectScreenProps = Record<string, never>;

/** 07 — Connection Method. */
export function ConnectScreen(_props: ConnectScreenProps) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <PairingHeader title={pairingCopy.headerTitle} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.intro}>
          <View style={styles.heart}>
            <Icon name="favorite" filled size={28} color="primary" />
          </View>
          <AppText variant="headlineLgMobile" color="onSurface" align="center" style={styles.introTitle}>
            {copy.title}
          </AppText>
          <AppText variant="bodyMd" color="onSurfaceVariant" align="center" style={styles.introBody}>
            {copy.subtitle}
          </AppText>
        </View>

        <View style={styles.cards}>
          <OptionCard
            chip={copy.createChip}
            chipBackground={colors.surfaceContainer}
            chipColor="primary"
            cornerIcon="add_circle"
            cornerColor="primary"
            icon="share_location"
            iconBackground="rgba(255, 187, 187, 0.5)"
            title={copy.createTitle}
            body={copy.createBody}
            cta={copy.createCta}
            ctaColor="primary"
            onPress={() => router.push('/invite')}
          />
          <OptionCard
            chip={copy.joinChip}
            chipBackground={colors.secondaryFixed}
            chipColor="onSecondaryFixed"
            cornerIcon="key"
            cornerColor="secondary"
            icon="qr_code_scanner"
            iconBackground={colors.surfaceContainer}
            title={copy.joinTitle}
            body={copy.joinBody}
            cta={copy.joinCta}
            ctaColor="secondary"
            onPress={() => router.push('/join')}
          />
        </View>

        <View style={styles.nest}>
          <Image source={require('@/assets/images/mock/nest.png')} style={styles.nestImage} contentFit="cover" />
          <View style={styles.flexShrink}>
            <AppText variant="labelMd" color="primary">
              {copy.nestTitle}
            </AppText>
            <AppText variant="labelSm" color="onSurfaceVariant" numberOfLines={2} style={styles.nestBody}>
              {copy.nestBody}
            </AppText>
          </View>
        </View>

        <View style={styles.security}>
          <View style={styles.securityIcon}>
            <Icon name="verified_user" filled size={20} color="primary" />
          </View>
          <AppText variant="labelSm" color="onSurfaceVariant" style={styles.securityText}>
            {copy.privacy}
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type OptionCardProps = {
  readonly chip: string;
  readonly chipBackground: string;
  readonly chipColor: ColorToken;
  readonly cornerIcon: string;
  readonly cornerColor: ColorToken;
  readonly icon: string;
  readonly iconBackground: string;
  readonly title: string;
  readonly body: string;
  readonly cta: string;
  readonly ctaColor: ColorToken;
  readonly onPress: () => void;
};

function OptionCard(props: OptionCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={props.title}
      onPress={props.onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.cardTop}>
        <View style={[styles.chip, { backgroundColor: props.chipBackground }]}>
          <AppText variant="labelSm" color={props.chipColor}>
            {props.chip}
          </AppText>
        </View>
        <View style={styles.cornerIcon}>
          <Icon name={props.cornerIcon} size={18} color={props.cornerColor} />
        </View>
      </View>

      <View style={styles.cardMiddle}>
        <View style={[styles.cardIcon, { backgroundColor: props.iconBackground }]}>
          <Icon name={props.icon} filled size={30} color="primary" />
        </View>
        <View style={styles.flexShrink}>
          <AppText variant="headlineMd" color="onSurface" numberOfLines={1}>
            {props.title}
          </AppText>
          <AppText variant="bodyMd" color="onSurfaceVariant" numberOfLines={2} style={styles.cardBody}>
            {props.body}
          </AppText>
        </View>
      </View>

      <View style={styles.cardCta}>
        <AppText variant="labelMd" color={props.ctaColor}>
          {props.cta}
        </AppText>
        <Icon name="arrow_forward" size={18} color={props.ctaColor} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 32,
  },
  intro: {
    alignItems: 'center',
    paddingTop: 16,
    gap: 4,
  },
  heart: {
    width: 48,
    height: 48,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    boxShadow: elevation.sm,
  },
  introTitle: {
    letterSpacing: -0.6,
  },
  introBody: {
    maxWidth: 320,
    lineHeight: 26,
  },
  cards: {
    gap: 16,
  },
  card: {
    padding: 24,
    borderRadius: corner.cardLg,
    backgroundColor: colors.surfaceContainerLowest,
    boxShadow: elevation.card,
    overflow: 'hidden',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: corner.full,
    flexShrink: 1,
  },
  cornerIcon: {
    width: 32,
    height: 32,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: corner.xxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexShrink: {
    flex: 1,
    minWidth: 0,
  },
  cardBody: {
    marginTop: 4,
  },
  cardCta: {
    marginTop: 16,
    paddingTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nest: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderRadius: corner.cardLg,
    backgroundColor: colors.surfaceContainerLow,
    overflow: 'hidden',
  },
  nestImage: {
    width: 64,
    height: 64,
    borderRadius: corner.xxl,
    backgroundColor: colors.surfaceContainer,
  },
  nestBody: {
    marginTop: 4,
  },
  security: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderRadius: corner.card,
    backgroundColor: 'rgba(255, 224, 241, 0.6)',
  },
  securityIcon: {
    width: 40,
    height: 40,
    borderRadius: corner.full,
    backgroundColor: colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.sm,
  },
  securityText: {
    flex: 1,
    lineHeight: 19.5,
  },
});
