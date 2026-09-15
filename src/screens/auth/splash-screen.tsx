import { Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { HeartMark } from '@/components/atoms/heart-mark';
import { Screen } from '@/components/organisms/screen';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export type SplashScreenProps = Record<string, never>;

export function SplashScreen(_props: SplashScreenProps) {
  const router = useRouter();

  return (
    <Screen>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={copy.splashHint}
        style={styles.fill}
        onPress={() => router.push('/login')}>
        <View style={styles.hero}>
          <HeartMark size={50} />
          <AppText variant="display" tone="pink" align="center">
            {copy.brand}
          </AppText>
          <AppText variant="caption" tone="secondary" align="center">
            {copy.splashHint}
          </AppText>
        </View>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
});
