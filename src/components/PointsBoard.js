import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PointsButtons } from './PointsButtons'
import { PointsLabels } from './PointsLabels'
import { useSettingsContext } from '../../context/SettingsContext'
import { EndGameModal } from './EndGameModal'
import { PointsHistoryModal } from './PointsHistoryModal'

export const PointsBoard = ({ updateScore, score, showHistory }) => {
  const { currentTeamAName, currentTeamBName } = useSettingsContext()

  const [matchesData, setMatchesData] = useState({
    winnerTeam: '',
    matchesWonByA: 0,
    matchesWonByB: 0,
  })

  const [modals, setModals] = useState({
    pointsHistory: false,
    endOfMatch: false,
    enfOfAllRounds: false,
  })

  const MAX_POINTS = 12

  const getWinnerTeamName = () => {
    const hasAWon = score.pointsA === MAX_POINTS
    const hasBWon = score.pointsB === MAX_POINTS

    if (hasAWon || hasBWon) {
      return hasAWon ? currentTeamAName : currentTeamBName
    }
  }

  const handleScoreChange = (team, points) => {
    if (team === currentTeamAName) {
      updateScore((prevScoreData) => ({
        pointsA: points,
        pointsB: prevScoreData.pointsB,
      }))
    }

    if (team === currentTeamBName) {
      updateScore((prevScoreData) => ({
        pointsA: prevScoreData.pointsA,
        pointsB: points,
      }))
    }

    const winnerTeam = getWinnerTeamName()

    if (winnerTeam) {
      setMatchesData((prevSetMatches) => ({
        winnerTeam: winnerTeam,
        matchesWonByA:
          winnerTeam === currentTeamAName
            ? prevSetMatches.matchesWonByA + 1
            : prevSetMatches.matchesWonByA,
        matchesWonByB:
          winnerTeam === currentTeamBName
            ? prevSetMatches.matchesWonByB + 1
            : prevSetMatches.matchesWonByB,
      }))
    }
  }

  useEffect(() => {
    setModals((prevModals) => ({
      ...prevModals,
      pointsHistory: showHistory.showPointsHistory,
    }))
  }, [showHistory.showPointsHistory])

  const renderPointsHistoryModal = () => {
    return (
      <PointsHistoryModal
        visible={{ modals, setModals }}
        score={score}
        updateScore={updateScore}
        historyButton={showHistory}
      />
    )
  }

  const renderEndGameModal = () => {
    return (
      <EndGameModal
        visible={{ modals, setModals }}
        score={score}
        setScore={updateScore}
        matches={{ matchesData, setMatchesData }}
      />
    )
  }

  const renderEndOfAllRoundsModal = () => {
    return (
      <EndGameModal
        visible={{ modals, setModals }}
        score={score}
        setScore={updateScore}
        matches={{ matchesData, setMatchesData }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <PointsButtons
          team={currentTeamAName}
          selectedIndex={score.pointsA}
          onScoreChange={handleScoreChange}
        />
      </View>
      <View style={styles.board}>
        <PointsLabels />
      </View>
      <View style={styles.board}>
        <PointsButtons
          team={currentTeamBName}
          selectedIndex={score.pointsB}
          onScoreChange={handleScoreChange}
        />
      </View>
      <View>{renderPointsHistoryModal()}</View>
      <View>{renderEndGameModal()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
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
