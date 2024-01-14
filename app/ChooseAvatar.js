import { useRouter } from 'expo-router'
import { Image, View, Pressable, Text, ToastAndroid } from 'react-native'
import images from '../constants/images'
import styles from '../styles/chooseAvatarStyle'
import { useLocalSearchParams } from 'expo-router'
import { useSettingsContext } from '../context/SettingsContext'

export default NewGame = () => {
  const navigation = useRouter()

  const {
    currentTeamAName,
    currentTeamBName,
    currentTeamAAvatar,
    setCurrentTeamAAvatar,
    currentTeamBAvatar,
    setCurrentTeamBAvatar,
  } = useSettingsContext()

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

  const params = useLocalSearchParams()

  const getCurrentAvatar = (item) => {
    if (params.teamName === currentTeamAName && item == currentTeamAAvatar) {
      return [styles.item, styles.selectedAvatar]
    }
    if (params.teamName === currentTeamBName && item == currentTeamBAvatar) {
      return [styles.item, styles.selectedAvatar]
    }
    if (params.teamName === currentTeamAName && item == currentTeamBAvatar) {
      return [styles.item, styles.adversaryAvatar]
    }
    if (params.teamName === currentTeamBName && item == currentTeamAAvatar) {
      return [styles.item, styles.adversaryAvatar]
    }
    return [styles.item, styles.defaultAvatarStatus]
  }

  const isDisabled = (item) => {
    return (
      (params.teamName === currentTeamAName && item == currentTeamBAvatar) ||
      (params.teamName === currentTeamBName && item == currentTeamAAvatar)
    )
  }

  const selectAvatar = (item) => {
    if (isDisabled(item)) {
      ToastAndroid.show('Já escolhido pela outra equipe.', ToastAndroid.SHORT)
      return
    }

    if (params.teamName === currentTeamAName) setCurrentTeamAAvatar(item)
    if (params.teamName === currentTeamBName) setCurrentTeamBAvatar(item)
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Selecione avatar</Text>
        <Text style={styles.teamText}>{params.teamName}</Text>
      </View>
      <View style={styles.gridContainer}>
        {avatars.map((item, idx) => (
          <Pressable
            key={idx}
            onPress={() => selectAvatar(item)}
            style={() => getCurrentAvatar(item)}
          >
            <Image source={item} style={styles.image} />
          </Pressable>
        ))}
      </View>
      <View style={styles.confirmButtonContainer}>
        <Pressable onPress={() => navigation.back()} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  )
}
