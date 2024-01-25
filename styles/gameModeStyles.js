import { StyleSheet } from 'react-native';

import { COLORS } from '../constants';

const styles = StyleSheet.create({
  pickerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.gray3,
    borderRadius: 30,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 16,
    color: COLORS.tertiary
  },
  picker: {
    flexGrow: 1,
    color: COLORS.gray,
  }
});

export default styles;
