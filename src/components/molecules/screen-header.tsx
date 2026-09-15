import { type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { IconButton } from '@/components/atoms/icon-button';
import { spacing } from '@/theme';

export type ScreenHeaderProps = {
  readonly title: string;
  readonly showBack?: boolean;
  readonly trailing?: ReactNode;
};

export function ScreenHeader({ title, showBack = true, trailing }: ScreenHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.row}>
      {showBack ? (
        <IconButton
          accessibilityLabel="Quay lại"
          icon={{ ios: 'chevron.left', android: 'arrow_back', web: 'arrow_back' }}
          onPress={() => router.back()}
        />
      ) : (
        <View style={styles.spacer} />
      )}
      <AppText variant="heading" style={styles.title}>
        {title}
      </AppText>
      {trailing ?? <View style={styles.spacer} />}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  spacer: {
    width: 40,
  },
});
