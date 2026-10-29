import { Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AppText } from '@/components/atoms/app-text';
import { BackButton } from '@/components/atoms/back-button';
import { Icon } from '@/components/atoms/icon';
import { colors, corner, elevation } from '@/theme';

export type PairingHeaderProps = {
  readonly title: string;
};

/** Thanh tiêu đề dùng chung cho các màn Cài đặt kết nối (07, 08, 10). */
export function PairingHeader({ title }: PairingHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.bar}>
      <View style={styles.leading}>
        <View style={styles.back}>
          <BackButton size={44} icon="arrow_back_ios_new" />
        </View>
        <AppText variant="headlineMd" color="onSurface" numberOfLines={1}>
          {title}
        </AppText>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Hồ sơ"
        hitSlop={8}
        onPress={() => router.push('/profile')}
        style={styles.avatar}>
        <Icon name="person" size={18} color="onPrimary" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 248, 249, 0.8)',
    boxShadow: elevation.header,
    zIndex: 10,
  },
  leading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexShrink: 1,
  },
  back: {
    marginLeft: -8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: corner.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: elevation.sm,
  },
});
