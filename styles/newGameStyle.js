import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  backButtonContainer: {
    marginLeft: 16,
    marginTop: 16,
  },
  backButton: {
    backgroundColor: COLORS.primary,
  },
  mainTextContainer: {
    marginTop: 36,
    marginBottom: 36,
    marginHorizontal: 'auto',
  },
  mainText: {
    display: 'flex',
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.primary,
  },
  sectionTextTitle: {
    fontSize: SIZES.medium,
    textAlign: 'left',
    fontFamily: FONT.semiBold,
    color: COLORS.secondary,
    marginHorizontal: 24,
    marginBottom: 8,
    marginTop: 24,
  },
  teamInputContainer: {
    gap: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 23,
  },
  teamInputText: {
    flexGrow: 1,
    fontFamily: FONT.regular,
  },
  picker: {
    flexGrow: 1,
  },
  pickerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: COLORS.primary,
    borderRadius: 30,
    borderWidth: 2,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 54,
  },
  button: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    borderWidth: 4,
    padding: 12,
    marginBottom: 18,
    flexDirection: 'row',
    width: 120,
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold,
  },
})

export default styles
