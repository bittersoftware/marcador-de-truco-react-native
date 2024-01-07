import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../styles/pointsLabelStyle'

export const PointsLabels = () => {
  const pointsList = Array.from({ length: 13 })
    .fill(0)
    .map((_, idx) => idx)
    .reverse()

  return pointsList.map((el) => (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text key={el} style={styles.button}>
        {el}
      </Text>
      <View style={styles.line} />
    </View>
  ))
}

