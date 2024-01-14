import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

export const styles = StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: COLORS.lightWhite,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  textContainer: {
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    flexGrow: 1,
    flex: 1,
    paddingVertical: 4,
  },
  teamsText: {
    textAlign: 'center',
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
  markerContainer: {
    flexDirection: 'row',
  },
  marker: {
    width: 10,
    height: 10,
    margin: 2,
    borderRadius: 5,
  },
  winMarker: {
    backgroundColor: COLORS.tertiary,
  },
  clearMarker: {
    backgroundColor: COLORS.lightWhite,
  },
})
