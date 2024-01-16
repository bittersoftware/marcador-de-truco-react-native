import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '../../constants/storageKeys';
import images from '../../constants/images';

const defaults = {
  [storageKeys.teamAName]: 'Casa',
  [storageKeys.teamBName]: 'Visitante',
  [storageKeys.teamAAvatar]: images.avatar1,
  [storageKeys.teamBAvatar]: images.avatar2,
  [storageKeys.gameMode]: 2,
  [storageKeys.preventSleep]: true
};

export const applyDefaults = async () => {
  try {
    keys = Object.values(storageKeys);

    const keyValues = await Promise.all(
      keys.map(async (key) => {
        const item = await AsyncStorage.getItem(key);
        return item;
      })
    );

    if (keyValues.includes(undefined || null)) {
      for (const [key, value] of Object.entries(defaults)) {
        if (
          [
            storageKeys.teamAAvatar,
            storageKeys.teamBAvatar,
            storageKeys.gameMode
          ].includes(key)
        ) {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
        } else {
          await AsyncStorage.setItem(key, value.toString());
        }
      }
    }
  } catch (e) {
    console.log('Failed to apply defaults', e);
  }
};
