import { ScrollView, StyleSheet } from 'react-native';

import { ActivityRow } from '@/components/molecules/activity-row';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { PhoneShell } from '@/components/organisms/phone-shell';
import { copy, recentTaps } from '@/data/mock';
import { spacing } from '@/theme';

export function AllTapsScreen() {
  return (
    <PhoneShell>
      <ScreenHeader title={copy.recentTapsLabel} />
      <ScrollView contentContainerStyle={styles.body}>
        {recentTaps.map((tap) => (
          <ActivityRow
            key={tap.id}
            actor={tap.actor}
            title={tap.title}
            time={tap.time}
            status={tap.status}
            incoming={tap.incoming}
          />
        ))}
      </ScrollView>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});
