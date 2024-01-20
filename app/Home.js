import { Image, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/homeStyle';
import { useSettingsContext } from '../context/SettingsContext';
import { pages } from '../constants';

export const Home = () => {
  const navigation = useRouter();

  const {
    currentTeamAAvatar,
    setCurrentTeamAAvatar,
    currentTeamAName,
    currentTeamBAvatar,
    setCurrentTeamBAvatar,
    setCurrentTeamAName,
    currentTeamBName,
    setCurrentTeamBName,
    defaultTeamAAvatar,
    defaultTeamAName,
    defaultTeamBName,
    defaultTeamBAvatar,
    currentGameMode,
    setCurrentGameMode,
    defaultGameMode
  } = useSettingsContext();

  const newGame = () => {
    if (!currentTeamAName) {
      setCurrentTeamAName(defaultTeamAName);
    }
    if (!currentTeamBName) {
      setCurrentTeamBName(defaultTeamBName);
    }
    if (!currentTeamAAvatar) {
      setCurrentTeamAAvatar(defaultTeamAAvatar);
    }
    if (!currentTeamBAvatar) {
      setCurrentTeamBAvatar(defaultTeamBAvatar);
    }
    if (!currentGameMode) {
      setCurrentGameMode(defaultGameMode);
    }

    navigation.push(pages.NEW_GAME);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/home-img.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Marcador de Truco</Text>
        <Text style={styles.subText}>
          Marque seus pontos e tenha um registro das partidas para tirar uma
          onda e compartilhar nas redes sociais.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.primaryButtonContainer}>
          <Pressable
            android_ripple={{ color: 'white', borderless: true }}
            style={styles.button}
            onPress={() => newGame()}
          >
            <Text style={[styles.buttonText, styles.mainButtonText]}>
              Novo Jogo
            </Text>
          </Pressable>
        </View>
        <View style={styles.secondaryButtonContainer}>
          <Pressable
            android_ripple={{ color: 'gray', borderless: true }}
            style={styles.button}
            onPress={() => navigation.push(pages.HISTORY)}
          >
            <Text style={styles.buttonText}>Histórico</Text>
          </Pressable>
        </View>
        <View style={styles.secondaryButtonContainer}>
          <Pressable
            android_ripple={{ color: 'gray', borderless: true }}
            style={styles.button}
            onPress={() => navigation.push(pages.SETTINGS)}
          >
            <Text style={styles.buttonText}>Configurações</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
