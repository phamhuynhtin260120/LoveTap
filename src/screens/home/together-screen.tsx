import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { Screen } from '@/components/organisms/screen';
import { copy } from '@/data/mock';
import { colors, spacing } from '@/theme';

export function TogetherScreen() {
  return (
    <Screen padded={false} edges={['top']} style={styles.screen}>
      <View style={styles.phone}>
        <View style={styles.body}>
          <AppText variant="heading">{copy.tabTogether}</AppText>
          <AppText variant="caption" tone="secondary">
            Không gian của hai đứa sẽ xuất hiện ở đây.
          </AppText>
        </View>
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
  body: {
    flex: 1,
    padding: spacing.xl,
    gap: spacing.sm,
    justifyContent: 'center',
  },
});
