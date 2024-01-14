import { useState } from 'react'
import { ScoreDisplay } from '../src/components/ScoreDisplay'
import { TeamNamesDisplay } from '../src/components/TeamNamesDisplay'
import { PointsBoard } from '../src/components/PointsBoard'
import { BoardOptionsModal } from '../src/components/BoardOptionsModal'
import { FloatingActionButton } from '../src/components/FloatingActionButton'
import { useSettingsContext } from '../context/SettingsContext'
import { View } from 'react-native'

export default ScoreBoard = () => {
  const { currentTeamAName, currentTeamBName } = useSettingsContext()

  const [scoreData, setScoreData] = useState({
    pointsA: 0,
    pointsB: 0,
  })

  const [modal, setModal] = useState(false)

  const [showPointsHistory, setShowPointsHistory] = useState(false)

  const [matchesData, setMatchesData] = useState({
    winnerTeam: '',
    matchesWonByA: 0,
    matchesWonByB: 0,
  })

  const handleClickFloatingAction = () => {
    setModal(() => true)
  }

  const handleClickHistory = () => {
    setModal(() => false)
    setShowPointsHistory(true)
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1,}}>
      <ScoreDisplay scoreData={scoreData} />
      <TeamNamesDisplay
        teamA={currentTeamAName}
        teamB={currentTeamBName}
        aWins={matchesData.matchesWonByA}
        bWins={matchesData.matchesWonByB}
      />
      <PointsBoard
        updateScore={setScoreData}
        score={scoreData}
        showHistory={{ showPointsHistory, setShowPointsHistory }}
        matchesData={matchesData}
        setMatchesData={setMatchesData}
      />
      <FloatingActionButton
        handleClickFloatingAction={handleClickFloatingAction}
      />
      <BoardOptionsModal
        visible={modal}
        setModal={setModal}
        handleClickHistory={handleClickHistory}
      />
    </View>
  )
}
