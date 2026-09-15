import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/atoms/app-text';
import { colors, radius, spacing } from '@/theme';

export type NestNoteProps = {
  readonly title: string;
  readonly body: string;
};

export function NestNote({ title, body }: NestNoteProps) {
  return (
    <View style={styles.card}>
      <View style={styles.photo} accessibilityLabel="Hai bàn tay nắm nhau">
        <View style={[styles.hand, styles.handBack]} />
        <View style={[styles.hand, styles.handFront]} />
      </View>
      <View style={styles.copy}>
        <AppText variant="label" tone="pink">
          {title}
        </AppText>
        <AppText variant="caption" tone="secondary">
          {body}
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
    backgroundColor: colors.nestWash,
    borderRadius: radius.xl,
    padding: spacing.sm,
    paddingRight: spacing.md,
  },
  photo: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
    backgroundColor: colors.photoPeach,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hand: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: radius.full,
  },
  handBack: {
    left: 10,
    top: 16,
    backgroundColor: colors.photoRose,
  },
  handFront: {
    right: 10,
    top: 18,
    backgroundColor: '#F3C2B4',
  },
  copy: {
    flex: 1,
    gap: 4,
  },
});
