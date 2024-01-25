import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 4,
  },
  buttonContainer: {
    marginVertical: 4,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 10,
    ...SHADOWS.small
  },
  buttonText: {
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite
  }
});

export default styles;
