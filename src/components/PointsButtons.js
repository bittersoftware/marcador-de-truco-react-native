import React from 'react'
import { StyleSheet, Pressable } from 'react-native'

export const PointsButtons = ({ team, selectedIndex, onScoreChange }) => {
  const pointsList = Array.from({ length: 13 })
    .fill(0)
    .map((_, idx) => idx)
    .reverse()


  const getButtonStyle = (index) => {
    if (index === selectedIndex) {
      return styles.buttonSelected;
    } else if (index > selectedIndex) {
      return styles.buttonActive;
    } else {
      return styles.buttonInactive;
    }
  };

  const handlePress = (el) => {
    onScoreChange(el);
  }



  const isButtonDisable = (index) => {
    console.log(index);
    return index < selectedIndex;
  }

  return pointsList.map((el) => (
    <Pressable
      style={[styles.button, getButtonStyle(el)]}
      onPress={() => handlePress(el)}
      disabled={isButtonDisable(el)}
      key={`${team}-${el}`}
    />
  )
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    padding: 4,
    margin: 4,
    width: 30,
    height: 30,
  },
  buttonSelected: {
    backgroundColor: 'green',
  },
  buttonActive: {
    backgroundColor: 'pink',
  },
  buttonInactive: {
    backgroundColor: 'gray',
  }
})
