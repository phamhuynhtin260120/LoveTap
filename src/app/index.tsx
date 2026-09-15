import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { SplashScreen as ChamSplashScreen } from '@/screens/auth/splash-screen';

export default function IndexRoute() {
  useEffect(() => {
    void SplashScreen.hideAsync();
  }, []);

  return <ChamSplashScreen />;
}
