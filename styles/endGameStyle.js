import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1
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
    color: COLORS.secondary
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  victory: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'relative'
  },
  avatarBackground: {
    borderRadius: 55,
    backgroundColor: COLORS.lightTertiary,
    justifyContent: 'space-around',
    position: 'absolute',
    top: 96
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center'
  },
  winnerTeamText: {
    marginTop: 12,
    fontFamily: FONT.game,
    fontSize: SIZES.xxLarge,
    color: COLORS.tertiary
  },
  loserTeamText: {
    fontFamily: FONT.game,
    fontSize: SIZES.large,
    color: COLORS.tertiary
  },
  scoreText: {
    fontFamily: FONT.game,
    color: COLORS.tertiary,
    fontSize: SIZES.xLarge,
    marginVertical: 8
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: 'center'
  },
  primaryButtonContainer: {
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: COLORS.tertiary,
    elevation: 2,
    width: 150
  },
  secondaryButtonContainer: {
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    elevation: 2,
    width: 150
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18
  },
  roundsContainer: {
    marginHorizontal: 12,
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  singleRoundContainer: {
    alignItems: 'center'
  },
  roundsScoreContainer: {
    borderRadius: 12,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    alignItems: 'center',
    padding: 4
  },
  roundScoreText: {
    color: COLORS.secondary,
    fontFamily: FONT.game,
    marginVertical: 4
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
    backgroundColor: COLORS.gray2
  },
  footerContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 24
  },
  footerRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 12
  },
  footerLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  footerText: {
    alignSelf: 'center',
    marginLeft: 6,
    marginRight: 10,
    fontFamily: FONT.semiBold,
    color: COLORS.secondary
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-end',
    marginBottom: 24
  }
});
