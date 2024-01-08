import { Modal, Text, Pressable, View } from 'react-native'
import { useSettingsContext } from '../../context/SettingsContext'
import { useEffect } from 'react'
import { styles } from '../../styles/endGameModalStyle'

export const EndGameModal = ({
  visible,
  score,
  setScore,
  setMatchesData,
  winsA,
  winsB,
  setPointsHistory,
  currentRoundRef
}) => {
  const { currentTeamAName, currentTeamBName, currentGameMode } =
    useSettingsContext()

  const MAX_POINTS = 12

  const getWinnerTeamName = () => {
    const hasAWon = score.pointsA === MAX_POINTS
    const hasBWon = score.pointsB === MAX_POINTS

    if (hasAWon || hasBWon) {
      return hasAWon ? currentTeamAName : currentTeamBName
    }
  }

  useEffect(() => {
    if (getWinnerTeamName()) {
      visible.setModals((prevModals) => ({
        ...prevModals,
        endOfMatch: true,
      }))
    }
  }, [score.pointsA, score.pointsB])

  const dismissAndRestart = () => {
    setPointsHistory(() => [])
    currentRoundRef.current = -1

    if (winsA >= currentGameMode.maxWins || winsB >= currentGameMode.maxWins) {
      setMatchesData(() => ({
        winnerTeam: '',
        matchesWonByA: 0,
        matchesWonByB: 0,
      }))
    }

    setScore(() => ({ pointsA: 0, pointsB: 0 }))

    visible.setModals((prevModals) => ({
      ...prevModals,
      endOfMatch: false,
    }))
  }

  return (
    visible.modals.endOfMatch && (
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.mainText}>Fim da partida</Text>
            <View style={styles.winnerContainer}>
              <View style={styles.winnerTeamTextContainer}>
                <Text style={styles.teamText}>{getWinnerTeamName()}</Text>
              </View>
              <Text style={styles.winnerText}>Vencedor</Text>
            </View>
            <Text style={styles.roundText}>
              Jogo {winsA + winsB} de melhor de {currentGameMode.maxMatches}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => dismissAndRestart()}
            >
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  )
}
