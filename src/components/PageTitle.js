import { View, Text, StyleSheet, Pressable, ToastAndroid } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSettingsContext } from '../../context/SettingsContext';

export const PageTitle = ({ text }) => {
  const navigation = useRouter();
  const { defaultTeamAName, defaultTeamBName } = useSettingsContext();

  const goHome = () => {
    if (text === 'Configurações' && (!defaultTeamAName || !defaultTeamBName)) {
      console.log('settings');
      ToastAndroid.show(
        'O nome das equipes não pode estar vazio!',
        ToastAndroid.SHORT
      );
      return;
    }
    navigation.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={goHome}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.tertiary,
    gap: 18,
    position: 'relative',
    height: 56
  },
  buttonContainer: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    position: 'absolute',
    left: 12,
    top: 16
  },
  mainTextContainer: {
    flexGrow: 1,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    display: 'flex',
    fontSize: SIZES.xLarge,
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite
  }
});
