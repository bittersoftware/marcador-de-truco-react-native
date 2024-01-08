import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  winnerContainer: {
    position: 'relative',
  },
  winnerText: {
    fontFamily: FONT.regular,
    position: 'absolute',
    top: 12,
    alignSelf: 'center',
    backgroundColor: COLORS.tertiary,
    paddingHorizontal: 4,
  },
  winnerTeamTextContainer: {
    margin: 20,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'black',
  },
  teamText: {
    padding: 12,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  roundText: {
    fontFamily: FONT.medium,
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold,
    textAlign: 'center',
  },
  button: {
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
})
