import { Modal, Text, Pressable, View, Image } from 'react-native';
import { useSettingsContext } from '../../context/SettingsContext';
import { useEffect } from 'react';
import { styles } from '../../styles/endMatchModalStyle';
import { gameModes } from '../misc/gameModes';

export const EndMatchModal = ({
  visible,
  score,
  setScore,
  matchesData,
  winsA,
  winsB,
  setPointsHistory,
  currentRoundRef
}) => {
  const { currentTeamAName, currentTeamBName, currentGameMode } =
    useSettingsContext();

  const MAX_POINTS = 12;
  const MAX_WINS = gameModes[currentGameMode].maxWins;
  const MAX_MATCHES = gameModes[currentGameMode].maxMatches;

  const getWinnerTeamName = () => {
    const hasAWon = score.pointsA === MAX_POINTS;
    const hasBWon = score.pointsB === MAX_POINTS;

    if (hasAWon || hasBWon) {
      return hasAWon ? currentTeamAName : currentTeamBName;
    }
  };

  const isEndOfGame = () => {
    return winsA >= MAX_WINS || winsB >= MAX_WINS;
  };

  useEffect(() => {
    if (getWinnerTeamName()) {
      if (isEndOfGame()) {
        visible.setModals((prevModals) => ({
          ...prevModals,
          endOfMatch: false,
          endOfGame: true
        }));
      } else {
        visible.setModals((prevModals) => ({
          ...prevModals,
          endOfMatch: true
        }));
      }
    }
  }, [score.pointsA, score.pointsB, matchesData]);

  const dismissAndRestart = () => {
    setPointsHistory(() => []);
    currentRoundRef.current = -1;

    setScore(() => ({ pointsA: 0, pointsB: 0 }));

    visible.setModals((prevModals) => ({
      ...prevModals,
      endOfMatch: false
    }));
  };

  return (
    visible.modals.endOfMatch && (
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.mainText}>Fim da partida</Text>
            <View style={styles.winnerContainer}>
              <View style={styles.winnerTeamTextContainer}>
                <Text style={styles.teamText}>{getWinnerTeamName()}</Text>
              </View>
              <Image
                source={require('../../assets/images/medal.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.roundText}>Jogo {winsA + winsB}</Text>
            <Text style={styles.roundText}>
              Melhor de {MAX_MATCHES}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => dismissAndRestart()}
            >
              <Text style={styles.buttonText}>Próxima partida</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  );
};
