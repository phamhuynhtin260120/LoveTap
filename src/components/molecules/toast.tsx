import { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/atoms/app-text';
import { Icon } from '@/components/atoms/icon';
import { colors, corner } from '@/theme';

export type ToastProps = {
  readonly message: string;
  readonly visible: boolean;
};

/** Toast nổi ở đáy màn hình (nền on-surface, chữ inverse-on-surface) — màn 08. */
export function Toast({ message, visible }: ToastProps) {
  const insets = useSafeAreaInsets();
  const [progress] = useState(() => new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [progress, visible]);

  return (
    <View pointerEvents="none" style={[styles.host, { bottom: 24 + insets.bottom }]}>
      <Animated.View
        style={[
          styles.toast,
          {
            opacity: progress,
            transform: [
              { translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [12, 0] }) },
            ],
          },
        ]}>
        <View style={styles.check}>
          <Icon name="check" size={14} color="onPrimary" />
        </View>
        <AppText variant="labelSm" color="inverseOnSurface" style={styles.text}>
          {message}
        </AppText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  host: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  toast: {
    width: '90%',
    maxWidth: 384,
    borderRadius: corner.full,
    backgroundColor: colors.onSurface,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
  },
  check: {
    width: 24,
    height: 24,
    borderRadius: corner.full,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flexShrink: 1,
    lineHeight: 15,
  },
});
