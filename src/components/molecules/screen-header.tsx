import { type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { IconButton } from '@/components/atoms/icon-button';
import { copy } from '@/data/mock';
import { spacing } from '@/theme';

export type ScreenHeaderProps = {
  readonly title: string;
  readonly showBack?: boolean;
  readonly showProfile?: boolean;
  readonly trailing?: ReactNode;
};

export function ScreenHeader({
  title,
  showBack = true,
  showProfile = true,
  trailing,
}: ScreenHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.row}>
      {showBack ? (
        <IconButton
          variant="plain"
          name="chevronLeft"
          accessibilityLabel={copy.back}
          onPress={() => router.back()}
        />
      ) : (
        <View style={styles.spacer} />
      )}
      <AppText variant="label" style={styles.title}>
        {title}
      </AppText>
      {trailing ??
        (showProfile ? (
          <IconButton
            variant="filled"
            name="person"
            accessibilityLabel={copy.profileA11y}
            onPress={() => router.push('/profile')}
          />
        ) : (
          <View style={styles.spacer} />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
  },
  spacer: {
    width: 40,
  },
});
