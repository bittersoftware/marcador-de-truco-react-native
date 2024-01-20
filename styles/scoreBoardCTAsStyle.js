import { StyleSheet } from 'react-native';

import { COLORS, FONT } from '../constants';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 32,
    justifyContent: 'space-between',
    width: 200,
  },
  secondaryButtonContainer: {
    marginVertical: 6,
    backgroundColor: COLORS.gray3,
    borderRadius: 36,
  },
  primaryButtonContainer: {
    marginVertical: 6,
    backgroundColor: COLORS.primary,
    borderRadius: 36,
  },
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  mainButtonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: FONT.semiBold,
    textAlign: 'center'
  }
});
