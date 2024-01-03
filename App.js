import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PointsButtons } from './src/components/PointsButtons'
import { PointsLabels } from './src/components/PointsLabels'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>9</Text>
        <Text style={styles.scoreText}>2</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.board}>
          <PointsButtons />
        </View>
        <View style={styles.board}>
          <PointsLabels />
        </View>
        <View style={styles.board}>
          <PointsButtons />
        </View>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  scoreContainer: {
    paddingTop: 40,
    backgroundColor: "red",
    flexDirection: "row",
    gap: 150,
    justifyContent: "center"
  },
  scoreText: {
    fontSize: 42,
  },
  container: {
    flex: 10,
    paddingTop: 24,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'center',
    flexDirection: "row",
  },
  board: {
    display: "flex",
  }
})
