import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../../styles/gameModeStyles';
import { useSettingsContext } from '../../context/SettingsContext';
import { pages } from '../../constants';
import { saveConfig } from '../misc/saveConfig';
import storageKeys from '../../constants/storageKeys';

export const GameModes = ({ origin }) => {
  const {
    currentGameMode,
    defaultGameMode,
    setCurrentGameMode,
    setDefaultGameMode
  } = useSettingsContext();

  const getGameMode = () => {
    if (origin === pages.SETTINGS) {
      return defaultGameMode;
    }
    if (origin === pages.NEW_GAME) {
      return currentGameMode;
    }
    console.log('Unknown origin get', origin);
  };

  const gameModePicker = (itemValue, _) => {
    if (origin === pages.SETTINGS) {
      setDefaultGameMode(itemValue);
      setCurrentGameMode(itemValue);
      saveConfig(storageKeys.gameMode, itemValue);
      return;
    }
    if (origin === pages.NEW_GAME) {
      setCurrentGameMode(itemValue);
      return;
    }
    console.log('Unknown origin set', origin);
  };

  return (
    <View style={styles.pickerContainer}>
      <MaterialCommunityIcons name="cards" size={28} color="black" />
      <View style={styles.picker}>
        <Picker
          selectedValue={getGameMode()}
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
  );
};
