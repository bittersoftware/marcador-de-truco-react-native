import React from 'react'
import { StyleSheet, Pressable } from 'react-native'

export const PointsButtons = () => {
  const pointsList = Array.from({ length: 13 })
    .fill(0)
    .map((_, idx) => idx)
    .reverse()
  const [selectedIndex, setIndex] = React.useState(0)

  console.log('Selected', selectedIndex)

  const getButtonStyle = (index) => {
    if (index === selectedIndex) {
      return styles.buttonSelected;
    } else if (index > selectedIndex) {
      return styles.buttonActive;
    } else {
      return styles.buttonInactive;
    }
  };

  const isButtonDisable = (index) => {
    return index < selectedIndex;
  }

  return pointsList.map((el) => (
    <Pressable
      style={[styles.button, getButtonStyle(el)]}
      onPress={() => setIndex(el)}
      disabled={isButtonDisable(el)}
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
