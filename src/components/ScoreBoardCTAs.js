import { Text, View, Pressable } from 'react-native';
import { styles } from '../../styles/scoreBoardCTAsStyle';
import { useSettingsContext } from '../../context/SettingsContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { pages } from '../../constants';

export const ScoreBoardCTAs = ({ pointsHistory, setModal }) => {
  const navigation = useRouter();

  const { setCurrentTeamAName, setCurrentTeamBName } = useSettingsContext();

  const [confirm, setConfirm] = useState(false);
  const [btnText, setBtnText] = useState('Encerrar jogo');

  const navHomeScreen = () => {
    if (!confirm) {
      setConfirm(() => true);
      setBtnText(() => 'Confirma?');
      return;
    }
    setCurrentTeamAName('');
    setCurrentTeamBName('');
    navigation.replace(pages.HOME);
  };

  const dismissModal = () => {
    setModal(() => false);
    setConfirm(() => false);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.buttonBase, styles.mainButton]}
        onPress={() => pointsHistory()}
      >
        <Text style={styles.mainButtonText}>Rodadas</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonBase, styles.button]}
        onPress={navHomeScreen}
      >
        <Text style={styles.buttonText}>{btnText}</Text>
      </Pressable>

      <Pressable
        style={[styles.buttonBase, styles.button]}
        onPress={dismissModal}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
};
