import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { colors } from '@/theme';

export default function AppTabs() {
  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.surfaceSoft}
      labelStyle={{ selected: { color: colors.textPink } }}>
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Chạm</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Hồ sơ</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
