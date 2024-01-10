import { Modal, Text, Pressable, View, Image } from 'react-native'
import { useSettingsContext } from '../../context/SettingsContext'
import { styles } from '../../styles/endGameModalStyle'
import { useRouter } from 'expo-router'

export const EndGameModal = ({ visible, score, winsA, winsB }) => {
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
            <View style={styles.titleContainer}>
              <Image
                source={require('../../assets/images/icon.png')}
                style={styles.logo}
              />
              <Text style={styles.mainText}>FIM DE JOGO</Text>
              <Image
                source={require('../../assets/images/icon.png')}
                style={styles.logo}
              />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../../assets/images/crown.png')}
                style={styles.crown}
              />
              <View style={styles.avatarBackground}>
                <Image
                  source={require('../../assets/images/cat.png')}
                  style={styles.avatar}
                />
              </View>
            </View>
            <View style={styles.winnerContainer}>
              <View style={styles.winnerTeamTextContainer}>
                <Text style={styles.winnerTeamText}>{getWinnerTeamName()}</Text>
              </View>
            </View>
            <Text style={styles.scoreText}>3 x 1</Text>
            <View style={styles.loserTeamTextContainer}>
              <Text style={styles.loserTeamText}>Outro Time</Text>
            </View>
            <View style={styles.roundsContainer}>
              <View style={styles.singleRoundContainer}>
                <View style={styles.roundsScoreContainer}>
                  <Text style={styles.roundScoreText}>12</Text>
                  <Text style={styles.roundScoreText}>x</Text>
                  <Text style={styles.roundScoreText}>9</Text>
                </View>
                <View style={styles.roundMark}></View>
              </View>
              <View style={styles.singleRoundContainer}>
                <View style={styles.roundsScoreContainer}>
                  <Text style={styles.roundScoreText}>12</Text>
                  <Text style={styles.roundScoreText}>x</Text>
                  <Text style={styles.roundScoreText}>9</Text>
                </View>
                <View style={styles.roundMark}></View>
              </View>
            </View>
            <Pressable style={styles.button} onPress={() => dismissAndGoHome()}>
              <Text style={styles.buttonText}>Finalizar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  )
}
