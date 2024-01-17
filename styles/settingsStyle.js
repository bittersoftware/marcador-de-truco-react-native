import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  mainTextContainer: {
    marginHorizontal: 'auto',
    backgroundColor: COLORS.tertiary,
    height: 56,
    justifyContent: 'center'
  },
  mainText: {
    display: 'flex',
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite
  },
  card: {
    backgroundColor: COLORS.lightWhite,
    marginHorizontal: 36,
    paddingVertical: 8,
    borderRadius: 16,
    marginTop: 24,
    ...SHADOWS.medium
  },
  sectionTextTitle: {
    fontSize: SIZES.medium,
    textAlign: 'left',
    fontFamily: FONT.semiBold,
    color: COLORS.primary,
    marginHorizontal: 24,
    marginVertical: 16
  },
  pickerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: COLORS.primary,
    borderRadius: 30,
    borderWidth: 2,
    marginHorizontal: 20,
    paddingHorizontal: 10
  },
  picker: {
    flexGrow: 1,
    color: COLORS.gray
  },
  awakeSwitch: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginHorizontal: 12
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 24
  },
  backButtonText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold
  }
});

export default styles;
