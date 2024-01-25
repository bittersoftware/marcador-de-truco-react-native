import { StyleSheet } from 'react-native';

import { COLORS } from '../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  icon: {
    color: COLORS.secondary
  }
});
