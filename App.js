import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScoreBoard } from './app/ScoreBoard'
import { Home } from './app/Home'
import { NewGame } from './app/NewGame'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Home/>
    </SafeAreaProvider>
  )
}

