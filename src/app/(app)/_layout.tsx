import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="create-tap" />
      <Stack.Screen name="taps" />
      <Stack.Screen name="moment/[id]" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="skeleton/[name]" />
    </Stack>
  );
}
