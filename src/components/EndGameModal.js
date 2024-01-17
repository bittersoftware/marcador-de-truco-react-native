import { Modal, Text, Pressable, View, Image } from 'react-native';
import { styles } from '../../styles/endGameModalStyle';
import { useRouter } from 'expo-router';
import { useSettingsContext } from '../../context/SettingsContext';
import { pages } from '../../constants';
import dbUtils from '../database/database';
import { generateEndScore } from '../misc/generateEndScoreData';

export const EndGameModal = ({ visible, endScoreData }) => {
  const navigation = useRouter();

  const { currentTeamAName, currentTeamAAvatar, currentTeamBAvatar } =
    useSettingsContext();

  if (!visible.modals.endOfGame) return;

  const result = generateEndScore({
    endScoreData: endScoreData,
    teamAName: currentTeamAName,
    teamAAvatar: currentTeamAAvatar,
    teamBAvatar: currentTeamBAvatar
  });

  // store data in database
  dbUtils.storeNewRow(result, console.log, console.log);

  const rounds = result.scoreList.map((data, index) => (
    <View key={index}>
      <View style={styles.singleRoundContainer}>
        <View style={styles.roundsScoreContainer}>
          <Text style={styles.roundScoreText}>{data.winnerScore}</Text>
          <Text style={styles.roundScoreText}>x</Text>
          <Text style={styles.roundScoreText}>{data.loserScore}</Text>
        </View>
        <View
          style={
            data.isWinnerRound
              ? [styles.roundMark, styles.winnerMark]
              : [styles.roundMark, styles.loserMark]
          }
        />
      </View>
    </View>
  ));

  const dismissAndGoHome = () => {
    navigation.replace(pages.HOME);
  };

  return (
    visible.modals.endOfGame && (
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Image
                source={require('../../assets/images/icon.png')}
                style={styles.logo}
              />
              <Text style={styles.mainText}>FIM DE JOGO</Text>
              <Image
                source={require('../../assets/images/icon.png')}
                style={styles.logo}
              />
            </View>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../../assets/images/crown.png')}
                style={styles.crown}
              />
              <View style={styles.avatarBackground}>
                <Image source={result.winnerAvatar} style={styles.avatar} />
              </View>
            </View>
            <View style={styles.winnerContainer}>
              <View style={styles.winnerTeamTextContainer}>
                <Text style={styles.winnerTeamText}>{result.winnerTeam}</Text>
              </View>
            </View>
            <Text style={styles.scoreText}>
              {result.winsWinner} x {result.winsLoser}
            </Text>
            <View style={styles.loserTeamTextContainer}>
              <Text style={styles.loserTeamText}>{result.loserTeam}</Text>
            </View>
            <View style={styles.roundsContainer}>{rounds}</View>
            <Pressable style={styles.button} onPress={() => dismissAndGoHome()}>
              <Text style={styles.buttonText}>Finalizar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  );
};
