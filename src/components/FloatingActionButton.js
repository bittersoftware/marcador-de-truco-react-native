import { Pressable, View } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { styles } from '../../styles/floatingActionButtonStyle'

export const FloatingActionButton = ({ handleClickFloatingAction }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={handleClickFloatingAction}>
        <SimpleLineIcons
          name="options-vertical"
          size={24}
          color={styles.icon.color}
        />
      </Pressable>
    </View>
  )
}
