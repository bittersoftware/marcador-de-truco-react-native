import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { PointsButtons } from '../components/PointsButtons'
import { PointsLabels } from '../components/PointsLabels'
import { EndGameModal } from '../components/EndGameModal'
import { PointsHistory } from '../components/PointsHistory'

export const ScoreBoard = () => {
  let teamA = 'Team Bla'
  let teamB = 'Team B'

  const [roundNumber, setRoundNumber] = useState(0)
  const [pointsA, setPointsA] = useState(0)
  const [pointsB, setPointsB] = useState(0)
  const [selectedIndexA, setIndexA] = useState(0)
  const [selectedIndexB, setIndexB] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [historyModalVisible, setHistoryModalVisible] = useState(false)
  const [winnerTeam, setWinnerTeam] = useState('')
  const [pointsHistory, setPointsHistory] = useState([
    { round: roundNumber, teamA: 0, teamB: 0 },
  ])

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const toggleHistoryModal = () => {
    setHistoryModalVisible(!historyModalVisible)
  }

  const undoLastPoint = () => {
    if (pointsHistory[0].round === 0) return;

    let pointsHistoryArr = pointsHistory;
    pointsHistoryArr.shift();

    const ptsA = pointsHistoryArr[0].teamA;
    const ptsB = pointsHistoryArr[0].teamB;
    const round = pointsHistoryArr[0].round;

    setPointsHistory([...pointsHistoryArr]);
    setRoundNumber(round);
    setPointsA(ptsA);
    setPointsB(ptsB);
    setIndexA(ptsA);
    setIndexB(ptsB);
  }

  const addToHistory = (ptsA, ptsB) => {
    setPointsHistory((prevPointsHistory) => {
      const updatedRoundNumber = roundNumber + 1
      const currentPoints = {
        round: updatedRoundNumber,
        teamA: ptsA,
        teamB: ptsB,
      }

      setRoundNumber(updatedRoundNumber)
      return [currentPoints, ...prevPointsHistory]
    })
  }

  const handleScoreChangeA = (pointsA) => {
    setIndexA(pointsA)
    setPointsA(pointsA)
    addToHistory(pointsA, pointsB)

    if (pointsA === 12) {
      setWinnerTeam(teamA)
      toggleModal()
    }
  }

  const handleScoreChangeB = (pointsB) => {
    setIndexB(pointsB)
    setPointsB(pointsB)
    addToHistory(pointsA, pointsB)

    if (pointsB === 12) {
      setWinnerTeam(teamB)
      toggleModal()
    }
  }

  const restartGame = () => {
    setPointsA(0)
    setPointsB(0)
    setIndexA(0)
    setIndexB(0)
    setPointsHistory([{ round: 0, teamA: 0, teamB: 0 }])
    setRoundNumber(0)
  }

  return (
    <>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{pointsA}</Text>
        <Text style={styles.scoreText}>{pointsB}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teamsText}>{teamA}</Text>
        <Text style={styles.teamsText}>{teamB}</Text>
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
        {modalVisible && (
          <EndGameModal
            modalIsVisible={modalVisible}
            dismissModal={toggleModal}
            restart={restartGame}
            team={winnerTeam}
          />
        )}
      </View>
      <View>
        {historyModalVisible && (
          <PointsHistory
            modalIsVisible={historyModalVisible}
            dismissModal={toggleHistoryModal}
            undo={undoLastPoint}
            data={pointsHistory}
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
