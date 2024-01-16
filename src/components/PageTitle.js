import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants/theme';

export const PageTitle = ({ text }) => (
  <View style={styles.mainTextContainer}>
    <Text style={styles.mainText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
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
  }
});
