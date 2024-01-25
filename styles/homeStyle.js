import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 32,
    backgroundColor: COLORS.primary
  },
  imageContainer: {
    padding: 24
  },
  image: {
    width: 200,
    height: 180
  },
  mainTextContainer: {
    maxWidth: 960,
    marginHorizontal: 'auto'
  },
  mainText: {
    display: 'flex',
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
    fontFamily: FONT.game,
    color: COLORS.tertiary
  },
  subText: {
    display: 'flex',
    textAlign: 'center',
    fontFamily: FONT.medium,
    marginHorizontal: 15,
    marginTop: 24,
    color: COLORS.secondary,
    padding: 8,
    fontSize: SIZES.medium
  },
  buttonsContainer: {
    flex: 1,
    paddingTop: 36,
    justifyContent: 'flex-end'
  },
  primaryButtonContainer: {
    marginBottom: 8,
    borderRadius: 36,
    backgroundColor: COLORS.tertiary
  },
  secondaryButtonContainer: {
    marginBottom: 8,
    borderRadius: 36,
    backgroundColor: COLORS.secondary
  },
  button: {
    padding: 12,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.semiBold
  },
  mainButtonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold
  }
});

export default styles;
