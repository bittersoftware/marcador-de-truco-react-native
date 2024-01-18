import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Switch,
  Pressable,
  ToastAndroid,
  ScrollView
} from 'react-native';
import styles from '../styles/settingsStyle';
import { useSettingsContext } from '../context/SettingsContext';
import { TeamDefinition } from '../src/components/TeamDefinition';
import { PageTitle } from '../src/components/PageTitle';
import { GameModes } from '../src/components/GameModes';
import { COLORS } from '../constants';
import pages from '../constants/pages';
import storageKeys from '../constants/storageKeys';
import { saveConfig } from '../src/misc/saveConfig';
import { useRouter } from 'expo-router';
import dbUtils from '../src/database/database';

export default Settings = () => {
  const navigation = useRouter();

  const { preventSleep, setPreventSleep, defaultTeamAName, defaultTeamBName } =
    useSettingsContext();

  const toggleSwitch = () => {
    setPreventSleep((previousState) => !previousState);
    saveConfig(storageKeys.preventSleep, !preventSleep);
  };

  const goHome = () => {
    if (!defaultTeamAName || !defaultTeamBName) {
      ToastAndroid.show(
        'O nome das equipes não pode estar vazio!',
        ToastAndroid.SHORT
      );
      return;
    }
    navigation.replace(pages.HOME);
  };

  const resetDatabase = () => {
    console.log('try to reset');
    dbUtils.resetDatabase();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <PageTitle text={'Configurações'} />
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.sectionTextTitle}>Equipes padrão</Text>
            <TeamDefinition origin={pages.SETTINGS} />
          </View>
          <View style={styles.card}>
            <Text style={styles.sectionTextTitle}>Rodadas padrão</Text>
            <GameModes origin={pages.SETTINGS} />
          </View>
          <View style={styles.card}>
            <Text style={styles.sectionTextTitle}>Manter tela ligada</Text>
            <View style={styles.awakeSwitch}>
              <Switch
                trackColor={{ false: COLORS.gray, true: COLORS.lightTertiary }}
                thumbColor={preventSleep ? COLORS.tertiary : COLORS.gray3}
                onValueChange={toggleSwitch}
                value={preventSleep}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.sectionTextTitle}>Rodadas padrão</Text>
            <Pressable
              onPress={resetDatabase}
              style={{ backgroundColor: 'pink', paddingVertical: 10 }}
            >
              <Text>DELETE</Text>
            </Pressable>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Pressable onPress={goHome}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
