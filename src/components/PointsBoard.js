import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { PointsButtons } from './PointsButtons'
import { PointsLabels } from './PointsLabels'
import { useSettingsContext } from '../../context/SettingsContext'
import { EndGameModal } from './EndGameModal'
import { PointsHistoryModal } from './PointsHistoryModal'

export const PointsBoard = ({ updateScore, score }) => {
  const { currentTeamAName, currentTeamBName } = useSettingsContext()

  const [matchesData, setMatchesData] = useState({
    winnerTeam: '',
    matchesWonByA: 0,
    matchesWonByB: 0,
    allRoundsFnished: false,
  })
  
  const [modals, setModals] = useState({
    pointsHistory: false,
    endOfMatch: false,
    enfOfAllRounds: false,
  })

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

    //if (points === MAX_POINTS || scoreData.pointsB === MAX_POINTS) {
      //scoreData.matchesWonByB

      //setScoreData((prevScoreData) => ({
        //...prevScoreData,
        //winnerTeam: team,
        //matchesWonByA:
          //team === currentTeamAName
            //? prevScoreData.matchesWonByA + 1
            //: prevScoreData.matchesWonByA,
        //matchesWonByB:
          //team === currentTeamBName
            //? prevScoreData.matchesWonByB + 1
            //: prevScoreData.matchesWonByB,
      //}))
      //toggleEngGameModal()
    //}
  }


  const renderEndGameModal = () => {
    return (
      <EndGameModal
        visible={{modals, setModals}}
        score={score}
        setScore={updateScore}
        setMatches={setMatchesData}
      />
    )
  }

  const renderPointsHistoryModal = () => {
    return (
      <PointsHistoryModal
        visible={setModals}
        setScore={updateScore}
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
      <View>
        {renderEndGameModal()}
      </View>
      <View>
        {renderPointsHistoryModal()}
      </View>
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
