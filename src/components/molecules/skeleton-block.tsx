import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/theme';

export type SkeletonBlockProps = {
  readonly width?: number | `${number}%`;
  readonly height?: number;
  readonly circle?: boolean;
};

export function SkeletonBlock({ width = '100%', height = 16, circle = false }: SkeletonBlockProps) {
  return (
    <View
      style={[
        styles.block,
        { width, height, borderRadius: circle ? radius.full : radius.sm },
      ]}
    />
  );
}

export function SkeletonScreenBody() {
  return (
    <View style={styles.stack}>
      <View style={styles.row}>
        <SkeletonBlock width={48} height={48} circle />
        <View style={styles.col}>
          <SkeletonBlock width="70%" height={14} />
          <SkeletonBlock width="40%" height={12} />
        </View>
      </View>
      <SkeletonBlock height={180} />
      <View style={styles.grid}>
        <SkeletonBlock width="48%" height={110} />
        <SkeletonBlock width="48%" height={110} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.skeleton,
  },
  stack: {
    gap: spacing.md,
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  col: {
    flex: 1,
    gap: spacing.xs,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
