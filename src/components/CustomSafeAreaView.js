import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS } from '../../constants/theme';

const statusBarArea = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: color || COLORS.tertiary
    }
  });
};

export default statusBarArea;
