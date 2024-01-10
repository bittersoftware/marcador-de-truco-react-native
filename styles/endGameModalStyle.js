import { PlatformColor, StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 35,
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  mainText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  avatarContainer:{
    alignItems: 'center'
  },
  crown: {
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  avatarBackground:{
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.lightWhite,
    justifyContent: 'space-around'
  },
  avatar: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  winnerTeamText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.tertiary,
  },
  loserTeamText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
  },
  scoreText: {
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite,
    fontSize: SIZES.large,
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: 'center',
  },
  button: {
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: COLORS.tertiary,
    padding: 10,
    elevation: 2,
  },
  roundsContainer:{
    margin: 12,
    flexDirection: 'row',
    gap: 12, 
    padding: 12
  },
  singleRoundContainer: {
    alignItems: 'center'
  },
  roundsScoreContainer: {
    borderRadius: 12,
    borderColor: COLORS.lightWhite,
    borderWidth: 2,
    alignItems: 'center',
    padding: 4,
  },
  roundScoreText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
  },
  roundMark: { 
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 6,
  },
  winnerMark: {
    backgroundColor: COLORS.tertiary,
  },
  loserMark: {
    backgroundColor: COLORS.lightWhite,
  }
})
