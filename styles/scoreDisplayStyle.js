import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

export const styles = StyleSheet.create({
  scoreContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  scoreText: {
    color: COLORS.secondary,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    textAlign: 'center',
    backgroundColor: COLORS.gray3,
    textAlignVertical: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
    ...SHADOWS.medium
  }
});
