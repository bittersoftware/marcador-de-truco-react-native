import { StyleSheet, Dimensions } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    width: Dimensions.get('window').width - 42,
    backgroundColor: COLORS.lightWhite,
    borderColor: COLORS.secondary,
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
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginBottom: 8
  },
  roundText: {
    color: COLORS.gray2,
    fontFamily: FONT.medium
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  mainImageContainer: {
    margin: 20
  },
  winnerTeamTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  teamText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 8,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    padding: 10,
    elevation: 2
  },
  button: { paddingHorizontal: 4 },
  buttonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold,
    textAlign: 'center'
  }
});
