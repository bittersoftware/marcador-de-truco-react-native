import { Modal, Text, Pressable, View } from 'react-native'
import { useSettingsContext } from '../../context/SettingsContext'
import { styles } from '../../styles/endGameModalStyle'
import { useRouter } from 'expo-router'

export const EndGameModal = ({
  visible,
  score,
  winsA,
  winsB,
}) => {
  const navigation = useRouter()

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

  const dismissAndGoHome = () => {
    navigation.replace('/')
  }

  return (
    visible.modals.endOfGame && (
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.mainText}>Fim de Jogo</Text>
            <View style={styles.winnerContainer}>
              <View style={styles.winnerTeamTextContainer}>
                <Text style={styles.teamText}>{getWinnerTeamName()}</Text>
              </View>
              <Text style={styles.winnerText}>Ganhou</Text>
            </View>
            <Text style={styles.roundText}>
              Jogo {winsA + winsB} de melhor de {currentGameMode.maxMatches}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => dismissAndGoHome()}
            >
              <Text style={styles.buttonText}>Finalizar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  )
}
