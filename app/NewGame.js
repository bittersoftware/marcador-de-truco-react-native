import { useRouter } from 'expo-router';
import {
  Text,
  View,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  ToastAndroid,
  ImageBackground
} from 'react-native';
import styles from '../styles/newGameStyle';
import { useSettingsContext } from '../context/SettingsContext';
import { TeamDefinition } from '../src/components/TeamDefinition';
import { PageTitle } from '../src/components/PageTitle';
import { GameModes } from '../src/components/GameModes';
import { pages } from '../constants';
import { banner } from '../src/ads/banner';

export default NewGame = () => {
  const navigation = useRouter();
  const { currentTeamAName, currentTeamBName } = useSettingsContext();

  const startGame = () => {
    if (!currentTeamAName || !currentTeamBName) {
      ToastAndroid.show(
        'O nome das equipes não pode estar vazio!',
        ToastAndroid.SHORT
      );
      return;
    }
    navigation.replace(pages.SCOREBOARD);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg}
          source={require('../assets/bg_center.png')}
        >
          <PageTitle text={'Novo Jogo'} />
          <View style={styles.card}>
            <Text style={styles.sectionTextTitle}>Equipes</Text>
            <TeamDefinition origin={pages.NEW_GAME} />
          </View>
          <View style={styles.card}>
            <Text style={styles.sectionTextTitle}>Rodadas</Text>
            <GameModes origin={pages.NEW_GAME} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
              <Pressable
                android_ripple={{ color: 'white' }}
                style={styles.button}
                onPress={() => startGame()}
              >
                <Text style={styles.buttonText}>Iniciar</Text>
              </Pressable>
            </View>
          </View>
          {banner(pages.NEW_GAME)}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
