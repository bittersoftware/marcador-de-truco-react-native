import { useCallback } from 'react';
import { useFonts } from 'expo-font';
//import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './Home';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Font-Bold': require('../assets/fonts/Montserrat-Bold.otf'),
    'Font-SemiBold': require('../assets/fonts/Montserrat-SemiBold.otf'),
    'Font-Regular': require('../assets/fonts/Montserrat-Regular.otf'),
    'Font-Medium': require('../assets/fonts/Montserrat-Medium.otf'),
    'Font-Thin': require('../assets/fonts/Montserrat-Thin.otf'),
    'Font-Light': require('../assets/fonts/Montserrat-Light.otf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}
