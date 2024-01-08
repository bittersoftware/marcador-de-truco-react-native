import { useState } from 'react'
import { useRouter } from 'expo-router'
import { Picker } from '@react-native-picker/picker'
import { TextInput, Text, View, Pressable } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import styles from '../styles/newGameStyle'
import { useSettingsContext } from '../context/SettingsContext'

export default NewGame = () => {
  const navigation = useRouter()
  const {
    currentTeamAName,
    setCurrentTeamAName,
    currentTeamBName,
    setCurrentTeamBName,
    defaultTeamAName,
    defaultTeamBName,
    setCurrentGameMode,
  } = useSettingsContext()

  const MIN_CHARS = 1
  const MAX_CHARS = 15

  const [selectedGameMode, setSelectedGameMode] = useState()

  const gameModes = {
    1: {maxWins: 1, maxMatches: 1},
    2: {maxWins: 2, maxMatches: 3},
    3: {maxWins: 3, maxMatches: 5},
    4: {maxWins: 4, maxMatches: 7},
  }

  const gameModePicker = (itemValue, _) => {
    setSelectedGameMode(itemValue)
    setCurrentGameMode(gameModes[itemValue])
  }

  const startGame = () => {
    if (!currentTeamAName) {
      setCurrentTeamAName(defaultTeamAName)
    }
    if (!currentTeamBName) {
      setCurrentTeamBName(defaultTeamBName)
    }
    navigation.replace('/ScoreBoard')
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Novo Jogo</Text>
      </View>
      <Text style={styles.sectionTextTitle}>Nome das Equipes</Text>
      <View style={styles.teamInputContainer}>
        <FontAwesome5 name="user-friends" size={24} color="black" />
        <TextInput
          style={styles.teamInputText}
          maxLength={MAX_CHARS}
          minLength={MIN_CHARS}
          defaultValue={defaultTeamAName}
          onChangeText={(text) => setCurrentTeamAName(text)}
        />
      </View>
      <View style={styles.teamInputContainer}>
        <FontAwesome5 name="user-friends" size={24} color="black" />
        <TextInput
          style={styles.teamInputText}
          maxLength={MAX_CHARS}
          minLength={MIN_CHARS}
          defaultValue={defaultTeamBName}
          onChangeText={(text) => setCurrentTeamBName(text)}
        />
      </View>
      <Text style={styles.sectionTextTitle}>Número de Rodadas</Text>
      <View style={styles.pickerContainer}>
        <MaterialCommunityIcons name="cards" size={28} color="black" />
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedGameMode}
            onValueChange={gameModePicker}
            style={styles.picker}
          >
            <Picker.Item
              label="Uma queda"
              value={1}
            />
            <Picker.Item
              label="Melhor de 3 (Quem faz 2)"
              value={2}
            />
            <Picker.Item
              label="Melhor de 5 (Quem faz 3)"
              value={3}
            />
            <Picker.Item
              label="Melhor de 7 (Quem faz 4)"
              value={4}
            />
          </Picker>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={startGame}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </Pressable>
        <Pressable onPress={() => navigation.replace('/')}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  )
}
