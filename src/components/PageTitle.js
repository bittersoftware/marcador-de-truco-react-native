import { View, Text, StyleSheet, Pressable, ToastAndroid } from 'react-native';
import { COLORS, FONT, SIZES, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSettingsContext } from '../../context/SettingsContext';

export const PageTitle = ({ text, ads }) => {
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
    <View style={{overflow: 'hidden', paddingBottom: 5}}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={goHome} android_ripple={{ color: 'white' }}>
            <Ionicons
              name="arrow-back-outline"
              size={28}
              color={COLORS.secondary}
            />
          </Pressable>
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    gap: 18,
    position: 'relative',
    height: 56,
    ...SHADOWS.small
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
    fontFamily: FONT.game,
    color: COLORS.tertiary
  }
});
