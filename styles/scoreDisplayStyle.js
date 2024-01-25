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
    color: COLORS.lightWhite,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.game,
    textAlign: 'center',
    backgroundColor: COLORS.tertiary,
    textAlignVertical: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
    ...SHADOWS.medium
  }
});
