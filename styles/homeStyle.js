import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 32,
    backgroundColor: COLORS.tertiary
  },
  imageContainer: {
    alignItems: 'center',
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
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.primary
  },
  subText: {
    display: 'flex',
    textAlign: 'center',
    fontFamily: FONT.regular,
    marginHorizontal: 15,
    color: COLORS.lightWhite,
    padding: 8,
    fontSize: SIZES.medium
  },
  buttonsContainer: {
    flex: 1,
    paddingTop: 36,
    justifyContent: 'flex-end'
  },
  button: {
    borderColor: COLORS.primary,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'center',
    borderRadius: 36,
    backgroundColor: COLORS.lightWhite,
  },
  mainButton: {
    backgroundColor: COLORS.primary
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
