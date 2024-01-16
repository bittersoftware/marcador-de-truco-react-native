import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: COLORS.tertiary,
    borderColor: COLORS.secondary,
    borderWidth: 6,
    borderRadius: 20,
    paddingTop: 35,
    paddingBottom: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  mainText: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary
  },
  winnerContainer: {
    margin: 20
  },
  winnerTeamTextContainer: {
    color: COLORS.primary,
    borderWidth: 6,
    borderRadius: 12,
    borderColor: COLORS.lightWhite,
    backgroundColor: COLORS.secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  teamText: {
    color: COLORS.lightWhite,
    padding: 12,
    fontFamily: FONT.bold,
    fontSize: SIZES.large
  },
  image: {
    width: 40,
    height: 50,
    alignSelf: 'center'
  },
  roundText: {
    color: COLORS.primary,
    fontFamily: FONT.medium
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold,
    textAlign: 'center'
  },
  button: {
    marginTop: 24,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    padding: 10,
    elevation: 2
  }
});
