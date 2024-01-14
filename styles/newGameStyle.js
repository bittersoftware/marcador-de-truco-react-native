import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
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
  teamSettingsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatar: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  teamInputContainer: {
    gap: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 23,
  },
  teamInputText: {
    fontFamily: FONT.regular,
    color: COLORS.gray,
    width: 180,
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
  picker: {
    flexGrow: 1,
    color: COLORS.gray,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 54,
    gap: 12,
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
  backButtonText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold,
    fontFamily: FONT.semiBold,
  },
})

export default styles
