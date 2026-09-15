import { Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { HeartMark } from '@/components/atoms/heart-mark';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export function SplashScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={copy.splashHint}
        style={styles.fill}
        onPress={() => router.push('/login')}>
        <View style={styles.hero}>
          <HeartMark size={80} />
          <AppText variant="display" tone="pink" align="center">
            {copy.brand}
          </AppText>
          <AppText variant="caption" tone="secondary" align="center">
            {copy.splashHint}
          </AppText>
        </View>
      </Pressable>
    </PhoneShell>
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
