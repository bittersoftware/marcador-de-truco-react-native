import { Modal, Text, Pressable, View, Image } from 'react-native'
import { styles } from '../../styles/endGameModalStyle'
import { useRouter } from 'expo-router'
import { useSettingsContext } from '../../context/SettingsContext'
import images from '../../constants/images'

export const EndGameModal = ({ visible, endScoreData }) => {
  const navigation = useRouter()

  const { currentTeamAName, currentTeamAAvatar, currentTeamBAvatar } =
    useSettingsContext()

  const avatars = [
    images.avatar1,
    images.avatar2,
    images.avatar3,
    images.avatar4,
    images.avatar5,
    images.avatar6,
    images.avatar7,
    images.avatar8,
    images.avatar9,
  ]

  const getEndGameData = () => {
    let winnerPerRound = []
    let winnerTeam = ''
    let loserTeam = ''
    let winsWinner = 0
    let winsLoser = 0
    let teamA = ''
    let teamB = ''
    let avatar = ''

    const gameScoreData = endScoreData.map((round) => {
      ;[teamA, teamB] = Object.keys(round).sort()
      const winnerTeam = round[teamA] > round[teamB] ? teamA : teamB
      winnerPerRound.push(winnerTeam)
    })

    const frequencyCount = {}

    winnerPerRound.forEach((element) => {
      frequencyCount[element] = (frequencyCount[element] || 0) + 1
    })

    const teamAVictories = frequencyCount[teamA] ? frequencyCount[teamA] : 0
    const teamBVictories = frequencyCount[teamB] ? frequencyCount[teamB] : 0

    winnerTeam = teamAVictories > teamBVictories ? teamA : teamB
    loserTeam = teamAVictories > teamBVictories ? teamB : teamA
    avatar =
      winnerTeam === currentTeamAName ? currentTeamAAvatar : currentTeamBAvatar

    return {
      winnerTeam: winnerTeam,
      loserTeam: loserTeam,
      winsWinner: frequencyCount[winnerTeam],
      winsLoser: frequencyCount[loserTeam] ? frequencyCount[loserTeam] : 0,
      avatar: avatar
    }
  }

  const parseScoreData = () => {
    const gameData = getEndGameData()
    const { winnerTeam, loserTeam, winsWinner, winsLoser, avatar } = gameData

    const scoreListWithInfo = endScoreData.map((round) => {
      const isWinnerRound = round[winnerTeam] > round[loserTeam]
      const winnerScore = round[winnerTeam]
      const loserScore = round[loserTeam]

      return { winnerScore, loserScore, isWinnerRound }
    })

    return {
      winnerTeam,
      loserTeam,
      winsWinner,
      winsLoser,
      avatar,
      scoreList: scoreListWithInfo,
    }
  }

  const result = parseScoreData()

  const rounds = result.scoreList.map((data, index) => (
    <View key={index}>
      <View style={styles.singleRoundContainer}>
        <View style={styles.roundsScoreContainer}>
          <Text style={styles.roundScoreText}>{data.winnerScore}</Text>
          <Text style={styles.roundScoreText}>x</Text>
          <Text style={styles.roundScoreText}>{data.loserScore}</Text>
        </View>
        <View
          style={
            data.isWinnerRound
              ? [styles.roundMark, styles.winnerMark]
              : [styles.roundMark, styles.loserMark]
          }
        ></View>
      </View>
    </View>
  ))

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
                  source={result.avatar}
                  style={styles.avatar}
                />
              </View>
            </View>
            <View style={styles.winnerContainer}>
              <View style={styles.winnerTeamTextContainer}>
                <Text style={styles.winnerTeamText}>{result.winnerTeam}</Text>
              </View>
            </View>
            <Text style={styles.scoreText}>
              {result.winsWinner} x {result.winsLoser}
            </Text>
            <View style={styles.loserTeamTextContainer}>
              <Text style={styles.loserTeamText}>{result.loserTeam}</Text>
            </View>
            <View style={styles.roundsContainer}>{rounds}</View>
            <Pressable style={styles.button} onPress={() => dismissAndGoHome()}>
              <Text style={styles.buttonText}>Finalizar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  )
}
