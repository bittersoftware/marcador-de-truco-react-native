import { Slot } from 'expo-router'
import { SettingsProvider } from '../context/SettingsContext'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <SettingsProvider>
        <Slot />
      </SettingsProvider>
    </SafeAreaProvider>
  )
}
