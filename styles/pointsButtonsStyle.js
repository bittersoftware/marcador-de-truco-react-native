import { StyleSheet } from "react-native";

import { COLORS } from "../constants";

export const styles = StyleSheet.create({
  buttonContainer: {
    width: 32,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 30,
    padding: 4,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonSelected: {
    backgroundColor: COLORS.tertiary,
    width: 35,
    height: 35,
  },
  buttonValidPoint: {
    backgroundColor: COLORS.lightWhite,
    width: 30,
    height: 30,
  },
  buttonPastPoint: {
    backgroundColor: COLORS.gray,
    width: 15,
    height: 15,
  },
  buttonInvalidPoint: {
    backgroundColor: COLORS.gray,
    width: 15,
    height: 15,
  },
})
