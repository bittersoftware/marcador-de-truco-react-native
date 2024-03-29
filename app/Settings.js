import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Switch,
  Pressable,
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
import dbUtils from '../src/database/database';
import { useState } from 'react';

export default Settings = () => {
  const { preventSleep, setPreventSleep } = useSettingsContext();
  const [confirm, setConfirm] = useState(false);
  const [btnText, setBtnText] = useState('Apagar');

  const toggleSwitch = () => {
    setPreventSleep((previousState) => !previousState);
    saveConfig(storageKeys.preventSleep, !preventSleep);
  };

  const resetDatabase = () => {
    if (!confirm) {
      setConfirm(() => true);
      setBtnText(() => 'Confirma?');
      return;
    }
    dbUtils.resetDatabase();
    setBtnText(() => 'Apagar');
    setConfirm(() => false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <PageTitle text={'Configurações'} />
        <View style={styles.scrollView}>
            <View style={styles.card}>
              <Text style={styles.sectionTextTitle}>Equipes padrão</Text>
              <TeamDefinition origin={pages.SETTINGS} />
            </View>
            <View style={[styles.card, { zIndex: 1000 }]}>
              <Text style={styles.sectionTextTitle}>Rodadas padrão</Text>
              <GameModes origin={pages.SETTINGS} />
            </View>
            <View style={styles.card}>
              <Text style={styles.sectionTextTitle}>Manter tela ligada</Text>
              <View style={styles.awakeSwitch}>
                <Switch
                  trackColor={{
                    false: COLORS.gray,
                    true: COLORS.lightTertiary
                  }}
                  thumbColor={preventSleep ? COLORS.tertiary : COLORS.gray3}
                  onValueChange={toggleSwitch}
                  value={preventSleep}
                />
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.sectionTextTitle}>Apagar histórico</Text>
              <View style={styles.deleteButtonContainer}>
                <Pressable
                  android_ripple={{ color: 'white', borderless: true }}
                  onPress={resetDatabase}
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteText}>{btnText}</Text>
                </Pressable>
              </View>
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
