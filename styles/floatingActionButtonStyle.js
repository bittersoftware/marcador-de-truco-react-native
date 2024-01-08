import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.lightWhite,
  }
})
