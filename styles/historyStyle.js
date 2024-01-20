import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray3,
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    color: COLORS.secondary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.tertiary,
  },
  emptyImage: {
    width: 200,
    height: 200,
    resizeMode: 'center',
  },
  emptyText: {
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    fontSize: SIZES.large,
    textAlign: 'center',
  },
});

export default styles;
