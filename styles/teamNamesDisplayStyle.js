import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

export const styles = StyleSheet.create({
  teamsContainer: {
    marginVertical: 12,
    backgroundColor: COLORS.lightWhite,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  teamsText: {
    paddingVertical: 4,
    width: '92%',
    backgroundColor: COLORS.gray2,
    borderRadius: 5,
    fontSize: SIZES.medium,
    textAlign: 'center',
    fontFamily: FONT.medium,
  },
})
