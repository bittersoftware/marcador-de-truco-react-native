import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../styles/floatingActionButtonStyle';

export const FloatingActionButton = ({ handleClickFloatingAction }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="ellipsis-vertical-circle-sharp"
        size={56}
        color={styles.icon.color}
        onPress={handleClickFloatingAction}
      />
    </View>
  );
};
