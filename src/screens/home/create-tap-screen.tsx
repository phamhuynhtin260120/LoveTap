import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/atoms/app-button';
import { AppInput } from '@/components/atoms/app-input';
import { AppText } from '@/components/atoms/app-text';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export function CreateTapScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <ScreenHeader title={copy.createTap} />
      <View style={styles.body}>
        <AppText variant="body" tone="secondary">
          {copy.createTapBodyLabel}
        </AppText>
        <AppInput label={copy.createTapTitleLabel} placeholder={copy.homeHeroTitle} />
        <AppInput label={copy.createTapBodyLabel} placeholder={copy.homeHeroBody} multiline />
        <View style={styles.footer}>
          <AppButton label={copy.saveTap} onPress={() => router.back()} />
        </View>
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: spacing.md,
    gap: spacing.md,
    paddingTop: spacing.md,
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: spacing.xl,
  },
});
