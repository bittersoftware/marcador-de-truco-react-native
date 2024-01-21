import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24
  },
  mainText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.lightWhite
  },
  avatarContainer: {
    alignItems: 'center'
  },
  crown: {
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  avatarBackground: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.lightWhite,
    justifyContent: 'space-around'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center'
  },
  winnerTeamText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.tertiary
  },
  loserTeamText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.tertiary
  },
  scoreText: {
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite,
    fontSize: SIZES.xLarge,
    marginVertical: 8
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: COLORS.tertiary,
    elevation: 2
  },
  button: {
    padding: 10
  },
  roundsContainer: {
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
    padding: 4
  },
  roundScoreText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.medium
  },
  roundMark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 6
  },
  winnerMark: {
    backgroundColor: COLORS.tertiary
  },
  loserMark: {
    backgroundColor: COLORS.lightWhite
  },
  footerContainer: {
    paddingTop: 24,
    marginRight: 12,
    marginBottom: 12,
  },
  footerRowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 8
  },
  footerLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  footerText: {
    fontFamily: FONT.medium,
    color: COLORS.lightWhite
  }
});
