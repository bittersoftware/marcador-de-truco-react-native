import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS } from '../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightTertiary,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 12,
    ...SHADOWS.medium,
  }
});
