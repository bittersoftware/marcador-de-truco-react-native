import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { PointsButtons } from '../components/PointsButtons'
import { PointsLabels } from '../components/PointsLabels'
import { EndGameModal } from '../components/EndGameModal'
import { PointsHistory } from '../components/PointsHistory'

export const ScoreBoard = () => {
  let teamA = 'Time A'
  let teamB = 'Time B'
  const MAX_POINTS = 12
  const MODALS = {
    ENDGAME: 'endgame',
    POINTS_HISTORY: 'pointsHistory',
    NEW_GAME: 'newGame',
  }

  const [scoreData, setScoreData] = useState({
    roundNumber: 0,
    pointsA: 0,
    pointsB: 0,
    pointsHistory: [{ round: 0, teamA: 0, teamB: 0 }],
    winnerTeam: '',
    modalState: { state: '' },
  })

  const toggleEngGameModal = () => {
    const newModalState =
      scoreData.modalState.state === MODALS.ENDGAME
        ? { state: '' }
        : { state: MODALS.ENDGAME }

    setScoreData((prevScoreData) => ({
      ...prevScoreData,
      modalState: newModalState,
    }))
  }

  const togglePointsHistoryModal = () => {
    const newModalState =
      scoreData.modalState.state === MODALS.POINTS_HISTORY
        ? { state: '' }
        : { state: MODALS.POINTS_HISTORY }

    setScoreData((prevScoreData) => ({
      ...prevScoreData,
      modalState: newModalState,
    }))
  }

  const undoLastPoint = () => {
    if (scoreData.pointsHistory[0].round === 0) return

    let pointsHistoryArr = scoreData.pointsHistory
    pointsHistoryArr.shift()

    const ptsA = pointsHistoryArr[0].teamA
    const ptsB = pointsHistoryArr[0].teamB
    const round = pointsHistoryArr[0].round

    setScoreData(() => ({
      roundNumber: round,
      pointsA: ptsA,
      pointsB: ptsB,
      pointsHistory: [...pointsHistoryArr],
      modalState: { state: '' },
    }))
  }

  const addToHistory = (ptsA, ptsB) => {
    const updatedRoundNumber = scoreData.roundNumber + 1

    const currentPoints = {
      round: updatedRoundNumber,
      teamA: ptsA,
      teamB: ptsB,
    }

    setScoreData((prevScoreData) => ({
      ...prevScoreData,
      roundNumber: updatedRoundNumber,
      pointsHistory: [currentPoints, ...prevScoreData.pointsHistory],
    }))
  }

  const handleScoreChange = (team, points) => {
    if (team === teamA) {
      setScoreData((prevScoreData) => ({
        ...prevScoreData,
        pointsA: points,
      }))

      addToHistory(points, scoreData.pointsB)
    }

    if (team === teamB) {
      setScoreData((prevScoreData) => ({
        ...prevScoreData,
        pointsB: points,
      }))

      addToHistory(scoreData.pointsA, points)
    }

    if (points === MAX_POINTS || scoreData.pointsB === MAX_POINTS) {
      setScoreData((prevScoreData) => ({
        ...prevScoreData,
        winnerTeam: team,
      }))
      toggleEngGameModal()
    }
  }

  const restartGame = () => {
    setScoreData(() => ({
      roundNumber: 0,
      pointsA: 0,
      pointsB: 0,
      pointsHistory: [{ round: 0, teamA: 0, teamB: 0 }],
      winnerTeam: '',
      modalVisible: false,
      historyModalVisible: false,
      modalState: { state: '' },
    }))
  }

  return (
    <>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{scoreData.pointsA}</Text>
        <Text style={styles.scoreText}>{scoreData.pointsB}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teamsText}>{teamA}</Text>
        <Text style={styles.teamsText}>{teamB}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.board}>
          <PointsButtons
            team={teamA}
            selectedIndex={scoreData.pointsA}
            onScoreChange={handleScoreChange}
          />
        </View>
        <View style={styles.board}>
          <PointsLabels />
        </View>
        <View style={styles.board}>
          <PointsButtons
            team={teamB}
            selectedIndex={scoreData.pointsB}
            onScoreChange={handleScoreChange}
          />
        </View>
      </View>
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
          onPress={() => togglePointsHistoryModal()}
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
          onPress={() => console.log("New Game")}
        >
          <Text>New Game</Text>
        </Pressable>
      </View>
      <View>
        {scoreData.modalState.state === MODALS.ENDGAME && (
          <EndGameModal
            dismissModal={toggleEngGameModal}
            restart={restartGame}
            team={scoreData.winnerTeam}
          />
        )}
      </View>
      <View>
        {scoreData.modalState.state === MODALS.POINTS_HISTORY && (
          <PointsHistory
            dismissModal={togglePointsHistoryModal}
            undo={undoLastPoint}
            data={scoreData.pointsHistory}
            teamNames={[teamA, teamB]}
          />
        )}
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
    alignItems: 'center'
  },
})
