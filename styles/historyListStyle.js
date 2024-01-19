import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 4,
  },
  buttonContainer: {
    marginVertical: 4,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: COLORS.gray,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 10,
    ...SHADOWS.small,
  },
  buttonText: {
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite

  }
});

export default styles;
