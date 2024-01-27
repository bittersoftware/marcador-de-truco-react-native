import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    marginVertical: 4
  },
  buttonContainer: {
    marginVertical: 4,
    alignSelf: 'center'
  },
  emptyContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyImage: {
    width: 200,
    height: 150,
    resizeMode: 'center'
  },
  emptyText: {
    fontFamily: FONT.bold,
    color: COLORS.secondary,
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    marginHorizontal: 36,
    backgroundColor: COLORS.primary
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
  },
  activityContainer: {
    marginVertical: 10,
    alignItems: 'center'
  }
});

export default styles;
