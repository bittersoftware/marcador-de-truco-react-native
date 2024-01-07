import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { PointsBoard } from '../src/components/PointsBoard'
import { ScoreDisplay } from '../src/components/ScoreDisplay'
import { useSettingsContext } from '../context/SettingsContext'
import { useRouter } from 'expo-router'

export default ScoreBoard = () => {
  const navigation = useRouter()
  const {
    currentTeamAName,
    currentTeamBName,
    setCurrentTeamAName,
    setCurrentTeamBName,
  } = useSettingsContext()

  const [scoreData, setScoreData] = useState({
    pointsA: 0,
    pointsB: 0,
  })

  const [showPointsHistory, setShowPointsHistory] = useState(false)

  const handleClickHistory = () => {
    setShowPointsHistory(true)
  }


  const navNewGameScreen = () => {
    setCurrentTeamAName('')
    setCurrentTeamBName('')
    navigation.replace('/NewGame')
  }

  return (
    <>
      <ScoreDisplay scoreData={scoreData}/>
      <View style={styles.teamsContainer}>
        <Text style={styles.teamsText}>{currentTeamAName}</Text>
        <Text style={styles.teamsText}>{currentTeamBName}</Text>
      </View>
      <PointsBoard
        updateScore={setScoreData}
        score={scoreData}
        showHistory={{showPointsHistory, setShowPointsHistory}}
      />
      <View style={{ flexDirection: 'row', gap: 30, justifyContent: 'center' }}>
        <Pressable
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 100,
            backgroundColor: 'pink',
            padding: 4,
          }}
          onPress={handleClickHistory}
        >
          <Text>History</Text>
        </Pressable>
        <Pressable
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 100,
            backgroundColor: 'pink',
            padding: 4,
          }}
          onPress={navNewGameScreen}
        >
          <Text>New Game</Text>
        </Pressable>
      </View>
    </>
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
    textAlign: 'center',
  },
  teamsContainer: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  teamsText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  container: {
    paddingTop: 24,
    backgroundColor: 'aliceblue',
    alignItems: 'top',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  board: {
    display: 'flex',
    alignItems: 'center',
  },
})
