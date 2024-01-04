import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScoreBoard } from './src/screens/ScoreBoard'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <ScoreBoard />
    </SafeAreaProvider>
  )
}

