import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import styles from '../../styles/gameModeStyles'
import { useSettingsContext } from '../../context/SettingsContext'

export const GameModes = () => {
  const { setCurrentGameMode } = useSettingsContext()

  const [selectedGameMode, setSelectedGameMode] = useState()

  const gameModes = {
    1: { maxWins: 1, maxMatches: 1 },
    2: { maxWins: 2, maxMatches: 3 },
    3: { maxWins: 3, maxMatches: 5 },
    4: { maxWins: 4, maxMatches: 7 },
  }

  const gameModePicker = (itemValue, _) => {
    setSelectedGameMode(itemValue)
    setCurrentGameMode(gameModes[itemValue])
  }

  return (
    <View style={styles.pickerContainer}>
      <MaterialCommunityIcons name="cards" size={28} color="black" />
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedGameMode}
          onValueChange={gameModePicker}
          style={styles.picker}
        >
          <Picker.Item label="Uma rodada" value={1} />
          <Picker.Item label="Melhor de 3 (Quem faz 2)" value={2} />
          <Picker.Item label="Melhor de 5 (Quem faz 3)" value={3} />
          <Picker.Item label="Melhor de 7 (Quem faz 4)" value={4} />
        </Picker>
      </View>
    </View>
  )
}
