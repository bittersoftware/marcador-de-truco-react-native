import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { PointsButtons } from '../components/PointsButtons'
import { PointsLabels } from '../components/PointsLabels'
import { EndGameModal } from '../components/EndGameModal'
import { PointsHistory } from '../components/PointsHistory'

export const ScoreBoard = () => {
  let teamA = 'Team A'
  let teamB = 'Team B'
  const maxPoints = 12

  const [scoreData, setScoreData] = useState({
    roundNumber: 0,
    pointsA: 0,
    pointsB: 0,
    selectedIndexA: 0,
    selectedIndexB: 0,
    pointsHistory: [{ round: 0, teamA: 0, teamB: 0 }],
    winnerTeam: '',
    modalVisible: false,
    historyModalVisible: false,
  })

  const toggleModal = () => {
    setScoreData((prevScoreData) => ({
      ...prevScoreData,
      modalVisible: !prevScoreData.modalVisible,
    }))
  }

  const toggleHistoryModal = () => {
    setScoreData((prevScoreData) => ({
      ...prevScoreData,
      historyModalVisible: !prevScoreData.historyModalVisible,
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
      selectedIndexA: ptsA,
      selectedIndexB: ptsB,
      pointsHistory: [...pointsHistoryArr],
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
    console.log(points);
    if (team === teamA) {
      setScoreData((prevScoreData) => ({
        ...prevScoreData,
        pointsA: points,
        selectedIndexA: points,
      }))

      addToHistory(points, scoreData.pointsB);
    }

    if (team === teamB) {
      setScoreData((prevScoreData) => ({
        ...prevScoreData,
        pointsB: points,
        selectedIndexB: points,
      }))

      addToHistory(scoreData.pointsA, points);
    }


    if (points === maxPoints || scoreData.pointsB === maxPoints) {
      setScoreData((prevScoreData) => ({
        ...prevScoreData,
        winnerTeam: team,
      }))
      toggleModal()
    }
  }

  const restartGame = () => {
    setScoreData(() => ({
      roundNumber: 0,
      pointsA: 0,
      pointsB: 0,
      selectedIndexA: 0,
      selectedIndexB: 0,
      pointsHistory: [{ round: 0, teamA: 0, teamB: 0 }],
      winnerTeam: '',
      modalVisible: false,
      historyModalVisible: false,
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
            selectedIndex={scoreData.selectedIndexA}
            onScoreChange={handleScoreChange}
          />
        </View>
        <View style={styles.board}>
          <PointsLabels />
        </View>
        <View style={styles.board}>
          <PointsButtons
            team={teamB}
            selectedIndex={scoreData.selectedIndexB}
            onScoreChange={handleScoreChange}
          />
        </View>
      </View>
      <Pressable
        style={{
          alignItems: 'center',
          height: 32,
          width: 50,
          backgroundColor: 'pink',
          padding: 4,
        }}
        onPress={() => toggleHistoryModal()}
      >
        <Text>Logs</Text>
      </Pressable>
      <View>
        {scoreData.modalVisible && (
          <EndGameModal
            modalIsVisible={scoreData.modalVisible}
            dismissModal={toggleModal}
            restart={restartGame}
            team={scoreData.winnerTeam}
          />
        )}
      </View>
      <View>
        {scoreData.historyModalVisible && (
          <PointsHistory
            modalIsVisible={scoreData.historyModalVisible}
            dismissModal={toggleHistoryModal}
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
  },
})
