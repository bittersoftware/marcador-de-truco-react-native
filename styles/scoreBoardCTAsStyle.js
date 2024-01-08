import { StyleSheet } from 'react-native'

import { COLORS, FONT } from '../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 12,
  },
  buttonBase: {
    borderColor: COLORS.primary,
    borderRadius: 36,
    paddingVertical: 12,
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
    backgroundColor: COLORS.lightWhite,
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
