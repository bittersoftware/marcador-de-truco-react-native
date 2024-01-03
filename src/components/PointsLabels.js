import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const PointsLabels = () => {
  const pointsList = Array.from({ length: 13 })
    .fill(0)
    .map((_, idx) => idx)
    .reverse()

  return pointsList.map((el) => (
    <Text style={styles.button}> --------- {el} -------- </Text>
  ))
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
    margin: 4,
    height: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 18,
  },
})
