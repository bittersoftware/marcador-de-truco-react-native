import { Text, View } from 'react-native'
import { styles } from '../../styles/teamNamesDisplayStyle'
import { useSettingsContext } from '../../context/SettingsContext'

export const TeamNamesDisplay = ({ teamA, teamB, aWins, bWins }) => {
  const { currentGameMode } = useSettingsContext()
  const aWinMarker = Array.from(
    { length: aWins },
    (_, index) => `$aWin-${index}`
  )
  const bWinMarker = Array.from(
    { length: bWins },
    (_, index) => `$bWin-${index}`
  )

  const aClearNum = currentGameMode.maxWins - aWins
  const bClearNum = currentGameMode.maxWins - bWins
  const aClearMarker = Array.from(
    { length: aClearNum },
    (_, index) => `$aClear-${index}`
  )
  const bClearMarker = Array.from(
    { length: bClearNum },
    (_, index) => `$bClear-${index}`
  )

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.teamsText}>{teamA}</Text>
        <View style={styles.markerContainer}>
          {aWinMarker.map((index) => (
            <View style={[styles.marker, styles.winMarker]} key={index} />
          ))}
          {aClearMarker.map((index) => (
            <View style={[styles.marker, styles.clearMarker]} key={index} />
          ))}
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.teamsText}>{teamB}</Text>
        <View style={styles.markerContainer}>
          {bWinMarker.map((index) => (
            <View style={[styles.marker, styles.winMarker]} key={index} />
          ))}
          {bClearMarker.map((index) => (
            <View style={[styles.marker, styles.clearMarker]} key={index} />
          ))}
        </View>
      </View>
    </View>
  )
}
