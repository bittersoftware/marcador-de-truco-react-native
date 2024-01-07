import React from 'react'
import { View, Pressable } from 'react-native'
import { styles } from '../../styles/pointsButtonsStyle'

export const PointsButtons = ({ team, selectedIndex, onScoreChange }) => {
  const pointsList = Array.from({ length: 13 })
    .fill(0)
    .map((_, idx) => idx)
    .reverse()

  const getButtonStyle = (index) => {
    if (index === selectedIndex) {
      return styles.buttonSelected
    } else if (!isInNextPoints(index)) {
      return styles.buttonPastPoint
    } else if (isInNextPoints(index) && isValidPoint(index)) {
      return styles.buttonValidPoint
    } else if (isInNextPoints && !isValidPoint(index)) {
      return styles.buttonInvalidPoint
    }
  }

  const handlePress = (el) => {
    onScoreChange(team, el)
  }

  const isValidPoint = (index) => {
    return (
      (index - selectedIndex) % 3 === 0 ||
      index === selectedIndex + 1 ||
      index === 12
    )
  }

  const isInNextPoints = (index) => {
    return index > selectedIndex
  }

  const isButtonDisabled = (index) => {
    return !isInNextPoints(index) || !isValidPoint(index)
  }

  return pointsList.map((el) => (
    <View key={`${team}-${el}`} style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, getButtonStyle(el)]}
        onPress={() => handlePress(el)}
        disabled={isButtonDisabled(el)}
      />
    </View>
  ))
}
