import { StyleSheet } from 'react-native'

import { COLORS, FONT } from '../constants'

export const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 32,
    justifyContent: 'space-between',
  },
  buttonBase: {
    marginVertical: 6,
    borderColor: COLORS.primary,
    borderRadius: 36,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButton: {
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  button: {
    borderWidth: 3,
 },
  mainButtonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold,
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: FONT.semiBold,
  },
})
