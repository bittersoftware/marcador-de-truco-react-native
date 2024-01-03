import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PointsButtons } from './src/components/PointsButtons'
import { PointsLabels } from './src/components/PointsLabels'
import { EndGameModal } from './src/components/EndGameModal'

export default function App() {
  const [pointsA, setPointsA] = useState(0)
  const [pointsB, setPointsB] = useState(0)
  const [selectedIndexA, setIndexA] = useState(0)
  const [selectedIndexB, setIndexB] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [winnerTeam, setWinnerTeam] = useState("")

  let teamA = "Team A";
  let teamB = "Team B";

  toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const handleScoreChangeA = (pointsA) => {
    setIndexA(pointsA);
    setPointsA(pointsA);

    if (pointsA === 12) {
      setWinnerTeam(teamA);
      toggleModal()
    }
  }

  const handleScoreChangeB = (pointsB) => {
    setIndexB(pointsB);
    setPointsB(pointsB);

    if (pointsB === 12) {
      setWinnerTeam(teamB);
      toggleModal()
    }
  }

  const restartGame = () => {
    setPointsA(0)
    setPointsB(0)
    setIndexA(0)
    setIndexB(0)
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{pointsA}</Text>
        <Text style={styles.scoreText}>{pointsB}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teamsText}>{teamA}</Text>
        <Text style={styles.teamsText}>{teamB}</Text>
      </View>
      <View>
        {modalVisible && (
          <EndGameModal
            modalIsVisible={modalVisible}
            dismissModal={toggleModal}
            restart={restartGame}
            team={winnerTeam}
          />
        )}
      </View>
      <View style={styles.container}>
        <View style={styles.board}>
          <PointsButtons
            team={teamA}
            selectedIndex={selectedIndexA}
            onScoreChange={handleScoreChangeA}
          />
        </View>
        <View style={styles.board}>
          <PointsLabels />
        </View>
        <View style={styles.board}>
          <PointsButtons
            team={teamB}
            selectedIndex={selectedIndexB}
            onScoreChange={handleScoreChangeB}
          />
        </View>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  scoreContainer: {
    paddingTop: 40,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: 42,
    flex: 1,
    textAlign: "center"
  },
  teamsContainer: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  teamsText: {
    fontSize: 18,
    flex: 1,
    textAlign: "center"
  },
  container: {
    flex: 10,
    paddingTop: 24,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  board: {
    display: 'flex',
  },
})
