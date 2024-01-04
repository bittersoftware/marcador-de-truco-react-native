import React from 'react'
import { StyleSheet, Pressable } from 'react-native'

export const PointsButtons = ({ team, selectedIndex, onScoreChange }) => {
  const pointsList = Array.from({ length: 13 })
    .fill(0)
    .map((_, idx) => idx)
    .reverse()

  const getButtonStyle = (index) => {
    if (index === selectedIndex) {
      return styles.buttonSelected
    }
    else if (!isInNextPoints(index)){
      return styles.buttonPastPoint
    }
    else if (isInNextPoints(index) && isValidPoint(index)){
      return styles.buttonValidPoint
    } else if (isInNextPoints && !isValidPoint(index)) {
      return styles.buttonInvalidPoint
    }
  }

  const handlePress = (el) => {
    onScoreChange(team, el)
  }

  const isValidPoint = (index) => {
    return ((index - selectedIndex) % 3 === 0 || 
    index === selectedIndex + 1 || index === 12);
  }

  const isInNextPoints = (index) => {
    return index > selectedIndex;
  }

  const isButtonDisabled = (index) => { 
    return !isInNextPoints(index) || !isValidPoint(index)
  }

  return pointsList.map((el) => (
    <Pressable
      style={[styles.button, getButtonStyle(el)]}
      onPress={() => handlePress(el)}
      disabled={isButtonDisabled(el)}
      key={`${team}-${el}`}
    />
  ))
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    padding: 4,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonSelected: {
    backgroundColor: 'blue',
    width: 35,
    height: 35,
  },
  buttonValidPoint: {
    backgroundColor: 'pink',
    width: 30,
    height: 30,
  },
  buttonPastPoint: {
    backgroundColor: 'gray',
    width: 30,
    height: 30,
  },
  buttonInvalidPoint: {
    backgroundColor: 'black',
    width: 30,
    height: 30,
  },
})
