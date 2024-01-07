import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  line: {
    backgroundColor: COLORS.gray,
    height: 2,
    width: 50,
  },
  button: {
    padding: 4,
    margin: 4,
    height: 30,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.gray,
    fontSize: SIZES.medium,
  },
})
