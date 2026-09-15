import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppIcon } from '@/components/atoms/app-icon';
import { AppText } from '@/components/atoms/app-text';
import { APP_TABS } from '@/navigation/app-tabs';
import { colors, spacing } from '@/theme';

type AppTabBarProps = {
  readonly state: {
    readonly index: number;
    readonly routes: readonly { key: string; name: string }[];
  };
  readonly navigation: {
    emit: (event: {
      type: 'tabPress';
      target: string;
      canPreventDefault: true;
    }) => { defaultPrevented: boolean };
    navigate: (name: string) => void;
  };
};

const tabByName = Object.fromEntries(APP_TABS.map((tab) => [tab.name, tab]));

export function AppTabBar({ state, navigation }: AppTabBarProps) {
  const insets = useSafeAreaInsets();
  const current = state.routes[state.index]?.name;
  if (!(current in tabByName)) {
    return null;
  }

  return (
    <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, spacing.xxs) }]}>
      <View style={styles.bar}>
        {APP_TABS.map((tab) => {
          const route = state.routes.find((item) => item.name === tab.name);
          if (!route) {
            return null;
          }

          const isFocused = state.routes[state.index]?.name === tab.name;
          const color = isFocused ? colors.text : colors.textSecondary;

          return (
            <Pressable
              key={tab.name}
              accessibilityRole="button"
              accessibilityState={{ selected: isFocused }}
              accessibilityLabel={tab.label}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
              <AppIcon name={isFocused ? tab.iconActive : tab.icon} color={color} />
              <AppText variant="caption" style={[styles.label, { color }]}>
                {tab.label}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dock: {
    backgroundColor: colors.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    alignItems: 'center',
  },
  bar: {
    width: '100%',
    maxWidth: 390,
    flexDirection: 'row',
    paddingTop: spacing.xs,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: spacing.xxs,
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
  },
});
