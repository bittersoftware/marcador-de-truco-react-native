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
  mainText: {
    display: 'flex',
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite
  },
  scrollView: {
    flex: 1
  },
  card: {
    backgroundColor: COLORS.lightWhite,
    marginHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 16,
    marginVertical: 6,
    ...SHADOWS.small
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
  awakeSwitch: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginHorizontal: 12
  },
  deleteButtonContainer: {
    backgroundColor: COLORS.tertiary,
    alignSelf: 'flex-start',
    marginLeft: 18,
    borderRadius: 24,
    marginBottom: 8,
    width: 120,
  },
  deleteButton: {
    padding: 12,
  },
  deleteText: {
    fontFamily: FONT.semiBold,
    textAlign: 'center',
    color: COLORS.primary
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 12
  },
  backButtonText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold,
  }
});

export default styles;
