import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type ActivityRowProps = {
  readonly actor: string;
  readonly title: string;
  readonly time: string;
  readonly status: string;
  readonly incoming?: boolean;
};

export function ActivityRow({ actor, title, time, status, incoming = false }: ActivityRowProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.photo, incoming ? styles.incoming : styles.outgoing]}>
        <View style={[styles.blob, styles.blobBack]} />
        <View style={[styles.blob, styles.blobFront]} />
      </View>
      <View style={styles.copy}>
        <AppText variant="label" style={styles.headline} numberOfLines={1}>
          {actor}{' '}
          <AppText variant="label" style={styles.title}>
            {title}
          </AppText>
        </AppText>
        <AppText variant="caption" tone="secondary" style={styles.meta}>
          {time} · <AppText style={styles.status}>{status}</AppText>
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.sm,
    shadowColor: colors.textPink,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  photo: {
    width: 48,
    height: 48,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  incoming: {
    backgroundColor: colors.photoPeach,
  },
  outgoing: {
    backgroundColor: colors.photoRose,
  },
  blob: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: radius.full,
  },
  blobBack: {
    left: 8,
    top: 14,
    backgroundColor: colors.photoRose,
  },
  blobFront: {
    right: 8,
    top: 16,
    backgroundColor: colors.photoHighlight,
  },
  copy: {
    flex: 1,
    gap: 2,
  },
  headline: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: colors.text,
  },
  meta: {
    fontSize: 12,
    lineHeight: 16,
  },
  status: {
    color: colors.textPink,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
});
