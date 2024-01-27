import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../../styles/gameModeStyles';
import { useSettingsContext } from '../../context/SettingsContext';
import { pages } from '../../constants';
import { saveConfig } from '../misc/saveConfig';
import storageKeys from '../../constants/storageKeys';
import { useState } from 'react';

export const GameModes = ({ origin }) => {
  const {
    currentGameMode,
    defaultGameMode,
    setCurrentGameMode,
    setDefaultGameMode
  } = useSettingsContext();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Uma rodada', value: 1 },
    { label: 'Melhor de 3 (Quem faz 2)', value: 2 },
    { label: 'Melhor de 5 (Quem faz 3)', value: 3 },
    { label: 'Melhor de 7 (Quem faz 4)', value: 4 }
  ]);

  const getGameMode = () => {
    if (origin === pages.SETTINGS) {
      return defaultGameMode;
    }
    if (origin === pages.NEW_GAME) {
      return currentGameMode;
    }
    console.log('Unknown origin get', origin);
  };

  const gameModePicker = (itemValue) => {
    setValue(() => itemValue);

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
      <MaterialCommunityIcons
        name="cards"
        size={28}
        color={styles.pickerContainer.color}
      />
      <DropDownPicker
        open={open}
        value={value ? value : getGameMode()}
        items={items}
        setOpen={setOpen}
        onSelectItem={(item) => gameModePicker(item.value)}
        setItems={setItems}
        style={styles.picker}
        dropDownContainerStyle={styles.pickerDropDown}
        textStyle={styles.pickerText}
      />
    </View>
  );
};
