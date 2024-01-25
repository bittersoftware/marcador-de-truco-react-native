import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  bg: {
    flex: 1,
  },
  mainTextContainer: {
    marginHorizontal: 'auto',
    backgroundColor: COLORS.tertiary,
    height: 56,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: COLORS.lightWhite,
    marginHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 16,
    marginTop: 8,
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
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 54,
  },
  buttonContainer: {
    backgroundColor: COLORS.tertiary,
    marginBottom: 18,
    width: 120,
    borderRadius: 30
  },
  button: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
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
