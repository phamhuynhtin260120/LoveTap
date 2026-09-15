import { copy } from '@/data/mock';

import type { AppIconName } from '@/components/atoms/app-icon';

export type AppTabName = 'home' | 'moments' | 'together';

export type AppTabConfig = {
  readonly name: AppTabName;
  readonly label: string;
  readonly icon: AppIconName;
  readonly iconActive: AppIconName;
};

export const APP_TABS: readonly AppTabConfig[] = [
  { name: 'home', label: copy.tabHome, icon: 'house', iconActive: 'houseFill' },
  { name: 'moments', label: copy.tabMoments, icon: 'grid', iconActive: 'gridFill' },
  { name: 'together', label: copy.tabTogether, icon: 'heart', iconActive: 'heartFill' },
];
