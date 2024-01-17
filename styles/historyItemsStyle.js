import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    marginHorizontal: 24
  },
  card: {
    flexDirection: 'row',
    flexGrow: 1,
    backgroundColor: COLORS.lightWhite,
    marginVertical: 2,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    ...SHADOWS.medium
  },
  teamsContainer: {
    flex: 0.4,
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
  textContainer: { paddingTop: 4 },
  text: {
    display: 'flex',
    fontSize: SIZES.medium,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.primary
  },
  middleContainer: {
    flexGrow: 0.2,
    justifyContent: 'space-around'
  },
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
    justifyContent: 'center',
  },
  roundWin: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: COLORS.tertiary,
  },
  roundLose: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: COLORS.gray2,
  }
});

export default styles;
