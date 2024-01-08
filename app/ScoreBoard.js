import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { ScoreDisplay } from '../src/components/ScoreDisplay'
import { TeamNamesDisplay } from '../src/components/TeamNamesDisplay'
import { PointsBoard } from '../src/components/PointsBoard'
import { ScoreBoardCTAs } from '../src/components/ScoreBoardCTAs'
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


  return (
    <>
      <ScoreDisplay scoreData={scoreData}/>
      <TeamNamesDisplay teamA={currentTeamAName} teamB={currentTeamBName}/>
      <PointsBoard
        updateScore={setScoreData}
        score={scoreData}
        showHistory={{showPointsHistory, setShowPointsHistory}}
      />
      <ScoreBoardCTAs pointsHistory={handleClickHistory}/>
    </>
  )
}

