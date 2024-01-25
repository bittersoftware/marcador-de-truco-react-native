import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    color: COLORS.primary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImage: {
    width: 200,
    height: 150,
    resizeMode: 'center',
  },
  emptyText: {
    fontFamily: FONT.bold,
    color: COLORS.secondary,
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    marginHorizontal: 36,
  },
});

export default styles;
