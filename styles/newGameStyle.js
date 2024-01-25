import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  mainTextContainer: {
    marginHorizontal: 'auto',
    backgroundColor: COLORS.tertiary,
    height: 56,
    justifyContent: 'center'
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
    color: COLORS.secondary,
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 54,
    gap: 12
  },
  button: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.tertiary,
    borderWidth: 4,
    padding: 12,
    marginBottom: 18,
    flexDirection: 'row',
    width: 120,
    justifyContent: 'center',
    borderRadius: 30
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite
  },
  backButtonText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold
  }
});

export default styles;
