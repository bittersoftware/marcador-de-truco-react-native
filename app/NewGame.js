import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import {
  TextInput,
  Text,
  View,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ToastAndroid
} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../styles/newGameStyle';
import { useSettingsContext } from '../context/SettingsContext';
import { TeamDefinition } from '../src/components/TeamDefinition';
import { PageTitle } from '../src/components/PageTitle';
import { GameModes } from '../src/components/GameModes';
import { pages } from '../constants';

export default NewGame = () => {
  const navigation = useRouter();
  const {
    currentTeamAAvatar,
    currentTeamAName,
    setCurrentTeamAName,
    currentTeamBAvatar,
    currentTeamBName,
    setCurrentTeamBName,
    defaultTeamAName,
    defaultTeamBName,
    setCurrentGameMode
  } = useSettingsContext();

  const startGame = () => {
    if (!currentTeamAName || !currentTeamBName) {
      ToastAndroid.show(
        'O nome das equipes não pode estar vazio!',
        ToastAndroid.SHORT
      );
      return
    }
    navigation.replace(pages.SCOREBOARD);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <PageTitle text={'Novo Jogo'} />
        <View style={styles.card}>
          <Text style={styles.sectionTextTitle}>Equipes</Text>
          <TeamDefinition origin={pages.NEW_GAME} />
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTextTitle}>Rodadas</Text>
          <GameModes origin={pages.NEW_GAME} />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => startGame()}>
            <Text style={styles.buttonText}>Iniciar</Text>
          </Pressable>
          <Pressable onPress={() => navigation.replace('/')}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
