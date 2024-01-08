import { Text, View, Pressable } from 'react-native'
import { styles } from '../../styles/scoreBoardCTAsStyle'
import { useSettingsContext } from '../../context/SettingsContext'
import { useRouter } from 'expo-router'

export const ScoreBoardCTAs = ({ pointsHistory }) => {
  const navigation = useRouter()
  const { setCurrentTeamAName, setCurrentTeamBName } = useSettingsContext()

  const navNewGameScreen = () => {
    setCurrentTeamAName('')
    setCurrentTeamBName('')
    navigation.replace('/NewGame')
  }

  const navHomeScreen = () => {
    setCurrentTeamAName('')
    setCurrentTeamBName('')
    navigation.replace('/')
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.buttonBase, styles.mainButton]}
        onPress={() => pointsHistory()}
      >
        <Text style={styles.mainButtonText}>Rodadas</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonBase, styles.button]}
        onPress={navNewGameScreen}
      >
        <Text style={styles.buttonText}>Novo Jogo</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonBase, styles.button]}
        onPress={navHomeScreen}
      >
        <Text style={styles.buttonText}>Início</Text>
      </Pressable>
    </View>
  )
}
