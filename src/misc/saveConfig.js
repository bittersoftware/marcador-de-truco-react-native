import AsyncStorage from '@react-native-async-storage/async-storage'
import storageKeys from '../../constants/storageKeys'

export const saveConfig = async (key, value) => {
  switch (key) {
    case storageKeys.teamAName:
      await AsyncStorage.setItem(storageKeys.teamAName, value)
      break
    case storageKeys.teamBName:
      await AsyncStorage.setItem(storageKeys.teamBName, value)
      break
    case storageKeys.teamAAvatar:
      const jsonAValue = JSON.stringify(value)
      await AsyncStorage.setItem(storageKeys.teamAAvatar, jsonAValue)
      break
    case storageKeys.teamBAvatar:
      const jsonBValue = JSON.stringify(value)
      await AsyncStorage.setItem(storageKeys.teamBAvatar, jsonBValue)
      break
    case storageKeys.gameMode:
      await AsyncStorage.setItem(storageKeys.gameMode, value.toString())
      break
    case storageKeys.preventSleep:
      await AsyncStorage.setItem(storageKeys.preventSleep, value.toString())
      break
    default:
      console.log('Unkwown setting', key)
  }

  console.log('Saving', key, value)
}
