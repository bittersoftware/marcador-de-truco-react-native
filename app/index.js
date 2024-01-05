import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Home } from './Home'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Home/>
    </SafeAreaProvider>
  )
}

