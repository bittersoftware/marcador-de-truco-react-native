import { Slot } from 'expo-router';
import { SettingsProvider } from '../context/SettingsContext';
import { StatusBar } from 'expo-status-bar';
import statusBarArea from '../src/components/CustomSafeAreaView';
import { SafeAreaView } from 'react-native';

export default function Layout() {
  return (
    <SafeAreaView style={statusBarArea().container}>
      <StatusBar style="auto" />
      <SettingsProvider>
        <Slot />
      </SettingsProvider>
    </SafeAreaView>
  );
}
