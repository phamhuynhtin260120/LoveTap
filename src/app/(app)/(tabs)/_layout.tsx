import { Tabs } from 'expo-router';

import { AppTabBar } from '@/components/molecules/app-tab-bar';
import { APP_TABS } from '@/navigation/app-tabs';
import { colors } from '@/theme';

export const unstable_settings = {
  initialRouteName: 'home',
};

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.textSecondary,
      }}>
      {APP_TABS.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} options={{ title: tab.label }} />
      ))}
    </Tabs>
  );
}
