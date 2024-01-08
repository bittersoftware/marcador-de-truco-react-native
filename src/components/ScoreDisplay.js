import { Text, View } from 'react-native'
import { styles } from '../../styles/scoreDisplayStyle'

export const ScoreDisplay = ({ scoreData }) => {
  return (
    <View style={styles.scoreContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.scoreText}>{scoreData.pointsA}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.scoreText}>{scoreData.pointsB}</Text>
      </View>
    </View>
  )
}
