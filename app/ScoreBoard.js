import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { ScoreDisplay } from '../src/components/ScoreDisplay'
import { TeamNamesDisplay } from '../src/components/TeamNamesDisplay'
import { PointsBoard } from '../src/components/PointsBoard'
import { ScoreBoardCTAs } from '../src/components/ScoreBoardCTAs'
import { BoardOptionsModal } from '../src/components/BoardOptionsModal'
import { FloatingActionButton } from '../src/components/FloatingActionButton'
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

  const [modal, setModal] = useState(false)

  const [showPointsHistory, setShowPointsHistory] = useState(false)

  const handleClickFloatingAction = () => {
    setModal(() => true)
  }

  const handleClickHistory = () => {
    setModal(() => false)
    setShowPointsHistory(true)
  }

  return (
    <>
      <ScoreDisplay scoreData={scoreData} />
      <TeamNamesDisplay teamA={currentTeamAName} teamB={currentTeamBName} />
      <PointsBoard
        updateScore={setScoreData}
        score={scoreData}
        showHistory={{ showPointsHistory, setShowPointsHistory }}
      />
      <FloatingActionButton
        handleClickFloatingAction={handleClickFloatingAction}
      />
      <BoardOptionsModal
        visible={modal}
        setModal={setModal}
        handleClickHistory={handleClickHistory}
      />
    </>
  )
}
