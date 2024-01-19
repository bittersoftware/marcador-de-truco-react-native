import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray3,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 36
  },
  button: {
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    padding: 12,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 36
  },
  buttonText: {
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold
  },
});

export default styles;
