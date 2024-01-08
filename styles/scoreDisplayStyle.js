import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

export const styles = StyleSheet.create({
  scoreContainer: {
    paddingTop: 40,
    backgroundColor: COLORS.lightWhite,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scoreText: {
    color: COLORS.secondary,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: COLORS.primary,
    borderWidth: 3,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
})
