import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  pickerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.gray3,
    borderRadius: 30,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 16
  },
  picker: {
    flexGrow: 1,
    color: COLORS.gray
  }
});

export default styles;
