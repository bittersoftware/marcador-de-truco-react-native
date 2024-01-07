import { useState } from 'react'
import { TextInput, Text, View, Pressable } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from '../styles/newGameStyle'
import { Picker } from '@react-native-picker/picker'
import { useRouter } from 'expo-router'
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

  const gameModePicker = (itemValue, _) => {
    setSelectedGameMode(itemValue)
    setCurrentGameMode(itemValue)
  }

  const startGame = () => {
    if (!currentTeamAName) { setCurrentTeamAName(defaultTeamAName)}
    if (!currentTeamBName) { setCurrentTeamBName(defaultTeamBName)}
    navigation.replace('/ScoreBoard')
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => navigation.replace('/')}>
          <Ionicons
            name="arrow-back-circle"
            size={42}
            color={styles.backButton.backgroundColor}
          />
        </Pressable>
      </View>
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
            <Picker.Item label="Uma queda" value="1" />
            <Picker.Item label="Melhor de 3 (Quem faz 2)" value="2" />
            <Picker.Item label="Melhor de 5 (Quem faz 3)" value="3" />
            <Picker.Item label="Melhor de 7 (Quem faz 4)" value="4" />
          </Picker>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={startGame}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </Pressable>
      </View>
    </View>
  )
}
