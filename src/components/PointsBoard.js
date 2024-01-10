import { useEffect, useState, useRef } from 'react'
import { View } from 'react-native'
import { PointsButtons } from './PointsButtons'
import { PointsLabels } from './PointsLabels'
import { EndMatchModal } from './EndMatchModal'
import { EndGameModal } from './EndGameModal'
import { PointsHistoryModal } from './PointsHistoryModal'
import { styles } from '../../styles/pointsBoardStyle'
import { useSettingsContext } from '../../context/SettingsContext'

export const PointsBoard = ({
  updateScore,
  score,
  showHistory,
  matchesData,
  setMatchesData,
}) => {
  const { currentTeamAName, currentTeamBName } = useSettingsContext()

  const [modals, setModals] = useState({
    pointsHistory: false,
    endOfMatch: false,
    endOfGame: false,
  })

  const [endScoreData, setEndScoreData] = useState([])

  const [pointsHistory, setPointsHistory] = useState([])
  const currentRoundRef = useRef(-1)

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
  }

  const updateScoreData = (winnerTeam) => {
    const winnerScore =
      score.pointsA > score.pointsB ? score.pointsA : score.pointsB

    const loserScore =
      score.pointsA < score.pointsB ? score.pointsA : score.pointsB

    const loserTeam =
      winnerTeam == currentTeamAName ? currentTeamBName : currentTeamAName

    setEndScoreData((prevEndScoreData) => ([
      ...prevEndScoreData,
      { [winnerTeam]: winnerScore, [loserTeam]: loserScore },
    ]))
  }

  useEffect(() => {
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

      updateScoreData(winnerTeam)
    }
  }, [score])

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
        pointsHistory={pointsHistory}
        setPointsHistory={setPointsHistory}
        currentRoundRef={currentRoundRef}
      />
    )
  }

  const renderEndMatchModal = () => {
    return (
      <EndMatchModal
        visible={{ modals, setModals }}
        score={score}
        setScore={updateScore}
        matchesData={matchesData}
        winsA={matchesData.matchesWonByA}
        winsB={matchesData.matchesWonByB}
        setPointsHistory={setPointsHistory}
        currentRoundRef={currentRoundRef}
      />
    )
  }

  const renderEndGameModal = () => {
    return (
      <EndGameModal
        visible={{ modals, setModals }}
        endScoreData={endScoreData}
        score={score}
        winsA={matchesData.matchesWonByA}
        winsB={matchesData.matchesWonByB}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <PointsButtons
          team={currentTeamAName}
          selectedIndex={score.pointsA}
          onScoreChange={handleScoreChange}
        />
      </View>
      <View>
        <PointsLabels />
      </View>
      <View>
        <PointsButtons
          team={currentTeamBName}
          selectedIndex={score.pointsB}
          onScoreChange={handleScoreChange}
        />
      </View>
      <View>{renderPointsHistoryModal()}</View>
      <View>{renderEndMatchModal()}</View>
      <View>{renderEndGameModal()}</View>
    </View>
  )
}
