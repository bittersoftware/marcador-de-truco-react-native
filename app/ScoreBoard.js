import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { PointsButtons } from '../src/components/PointsButtons'
import { PointsLabels } from '../src/components/PointsLabels'
import { PointsBoard } from '../src/components/PointsBoard'
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

  //const toggleEngGameModal = () => {
  //const newModalState =
  //scoreData.modalState.state === MODALS.ENDGAME
  //? { state: '' }
  //: { state: MODALS.ENDGAME }

  //setScoreData((prevScoreData) => ({
  //...prevScoreData,
  //modalState: newModalState,
  //}))
  //}

  //const togglePointsHistoryModal = () => {
  //const newModalState =
  //scoreData.modalState.state === MODALS.POINTS_HISTORY
  //? { state: '' }
  //: { state: MODALS.POINTS_HISTORY }

  //setScoreData((prevScoreData) => ({
  //...prevScoreData,
  //modalState: newModalState,
  //}))
  //}

  //const undoLastPoint = () => {
  //if (scoreData.pointsHistory[0].round === 0) return

  //let pointsHistoryArr = scoreData.pointsHistory
  //pointsHistoryArr.shift()

  //const ptsA = pointsHistoryArr[0].teamA
  //const ptsB = pointsHistoryArr[0].teamB
  //const round = pointsHistoryArr[0].round

  //setScoreData(() => ({
  //roundNumber: round,
  //pointsA: ptsA,
  //pointsB: ptsB,
  //pointsHistory: [...pointsHistoryArr],
  //modalState: { state: '' },
  //}))
  //}

  //const addToHistory = (ptsA, ptsB) => {
  //const updatedRoundNumber = scoreData.roundNumber + 1

  //const currentPoints = {
  //round: updatedRoundNumber,
  //teamA: ptsA,
  //teamB: ptsB,
  //}

  //setScoreData((prevScoreData) => ({
  //...prevScoreData,
  //roundNumber: updatedRoundNumber,
  //pointsHistory: [currentPoints, ...prevScoreData.pointsHistory],
  //}))
  //}

  //const restartGame = () => {
  //setScoreData((prevScoreData) => ({
  //...prevScoreData,
  //roundNumber: 0,
  //pointsA: 0,
  //pointsB: 0,
  //pointsHistory: [{ round: 0, teamA: 0, teamB: 0 }],
  //winnerTeam: '',
  //modalVisible: false,
  //historyModalVisible: false,
  //modalState: { state: '' },
  //}))
  //}

  //useEffect(() => {
  //if (
  //scoreData.matchesWonByA == currentGameMode ||
  //scoreData.matchesWonByB == currentGameMode
  //) {
  //setScoreData((prevScoreData) => ({
  //...prevScoreData,
  //matchesWonByA: 0,
  //matchesWonByB: 0,
  //allRoundsFnished: true,
  //}))

  //console.log('Show match result card')
  //}
  //}, [scoreData.matchesWonByA, scoreData.matchesWonByB])

  const navNewGameScreen = () => {
    setCurrentTeamAName('')
    setCurrentTeamBName('')
    navigation.replace('/NewGame')
  }

  const renderEndGameModal = () => {
    return (
      <EndGameModal
        dismissModal={toggleEngGameModal}
        restart={restartGame}
        team={scoreData.winnerTeam}
      />
    )
  }

  const renderPointsHistoryModal = () => {
    return (
      <PointsHistory
        dismissModal={togglePointsHistoryModal}
        undo={undoLastPoint}
        data={scoreData.pointsHistory}
        teamNames={[currentTeamAName, currentTeamBName]}
      />
    )
  }

  return (
    <>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{scoreData.pointsA}</Text>
        <Text style={styles.scoreText}>{scoreData.pointsB}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teamsText}>{currentTeamAName}</Text>
        <Text style={styles.teamsText}>{currentTeamBName}</Text>
      </View>
      <PointsBoard updateScore={setScoreData} score={scoreData} />
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
          onPress={navNewGameScreen}
        >
          <Text>New Game</Text>
        </Pressable>
      </View>
      {/*
      <View>
        {scoreData.modalState.state === MODALS.ENDGAME &&
          !scoreData.allRoundsFnished &&
          renderEndGameModal()}
      </View>
      <View>
        {scoreData.modalState.state === MODALS.POINTS_HISTORY &&
          renderPointsHistoryModal()}
      </View>
      */}
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
