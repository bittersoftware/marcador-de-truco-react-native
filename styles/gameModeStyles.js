import { StyleSheet } from 'react-native';

import { COLORS, FONT } from '../constants';

const styles = StyleSheet.create({
  pickerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.gray3,
    borderRadius: 30,
    marginHorizontal: 20,
    paddingLeft: 10,
    paddingRight: 30,
    marginBottom: 16,
    color: COLORS.tertiary,
  },
  picker: {
    backgroundColor: COLORS.gray3,
    borderWidth: 0,
    borderRadius: 30,
  },
  pickerDropDown: { borderRadius: 8, borderWidth: 0, zIndex: 100 },
  pickerText: { fontFamily: FONT.semiBold, color: COLORS.gray }
});

export default styles;
