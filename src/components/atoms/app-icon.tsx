import { SymbolView } from 'expo-symbols';

import { AppText } from '@/components/atoms/app-text';

const catalog = {
  house: { ios: 'house', fallback: '⌂' },
  houseFill: { ios: 'house.fill', fallback: '⌂' },
  grid: { ios: 'square.grid.2x2', fallback: '▦' },
  gridFill: { ios: 'square.grid.2x2.fill', fallback: '▦' },
  heart: { ios: 'heart', fallback: '♡' },
  heartFill: { ios: 'heart.fill', fallback: '♥' },
  person: { ios: 'person.fill', fallback: '☺' },
  chevronLeft: { ios: 'chevron.left', fallback: '‹' },
  chevronRight: { ios: 'chevron.right', fallback: '›' },
  plus: { ios: 'plus', fallback: '+' },
  qr: { ios: 'qrcode', fallback: '▦' },
  key: { ios: 'key.fill', fallback: '⌂' },
  location: { ios: 'location.fill', fallback: '⌖' },
  apple: { ios: 'apple.logo', fallback: '' },
  google: { ios: 'g.circle', fallback: 'G' },
} as const;

export type AppIconName = keyof typeof catalog;

export type AppIconProps = {
  readonly name: AppIconName;
  readonly color: string;
  readonly size?: number;
};

export function AppIcon({ name, color, size = 22 }: AppIconProps) {
  const icon = catalog[name];

  return (
    <SymbolView
      tintColor={color}
      size={size}
      name={{ ios: icon.ios }}
      fallback={
        <AppText style={{ color, fontSize: size - 4, lineHeight: size }}>{icon.fallback}</AppText>
      }
    />
  );
}
