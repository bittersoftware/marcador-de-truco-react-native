import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    marginHorizontal: 12
  },
  card: {
    flexGrow: 1,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 6,
    justifyContent: 'space-around',
    ...SHADOWS.medium
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 4
  },
  timeTextContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  timeText: {
    color: COLORS.gray,
    paddingHorizontal: 8,
    marginHorizontal: 2,
    backgroundColor: COLORS.gray3,
    borderRadius: 5,
    fontFamily: FONT.regular
  },
  iconContainer: { paddingRight: 8 },
  contentContainer: {
    flexDirection: 'row'
  },
  teamsContainer: {
    flex: 0.5,
    alignItems: 'center',
    padding: 4
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray3,
    width: 50,
    height: 50,
    borderRadius: 25,
    ...SHADOWS.small
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
    alignItems: 'center'
  },
  teamTextContainer: { paddingTop: 2 },
  teamText: {
    display: 'flex',
    fontSize: SIZES.small,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.primary
  },
  middleContainer: {
    justifyContent: 'space-around'
  },
  timeContainer: {},
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8
  },
  scoreText: {
    fontFamily: FONT.semiBold,
    paddingHorizontal: 4,
    fontSize: SIZES.xLarge
  },
  roundsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  roundWin: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: COLORS.tertiary
  },
  roundLose: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: COLORS.gray2
  }
});

export default styles;
