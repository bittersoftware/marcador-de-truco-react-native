
import { Text, View } from 'react-native'
import { styles } from '../../styles/teamNamesDisplayStyle'

export const TeamNamesDisplay = ({ teamA, teamB }) => {
  return (
    <View style={styles.teamsContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.teamsText}>{teamA}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.teamsText}>{teamB}</Text>
      </View>
    </View>
  )
}
