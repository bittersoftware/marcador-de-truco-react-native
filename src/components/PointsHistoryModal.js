import { useEffect, useRef, useState } from 'react';
import { Modal, Text, Pressable, View, FlatList } from 'react-native';
import { useSettingsContext } from '../../context/SettingsContext';
import { styles } from '../../styles/historyPointsModalStyle';

export const PointsHistoryModal = ({
  visible,
  score,
  updateScore,
  historyButton,
  pointsHistory,
  setPointsHistory,
  currentRoundRef
}) => {
  const btnTextUndo = 'Desfazer última';
  const btnTextConfirm = 'Confirma?';

  const { currentTeamAName, currentTeamBName } = useSettingsContext();
  const isUndoRef = useRef(false);
  const [confirm, setConfirm] = useState(false);
  const [btnText, setBtnText] = useState(btnTextUndo);

  const undoLastPoint = () => {
    if (pointsHistory[0].round === 0) {
      return;
    }

    if (!confirm) {
      setConfirm(() => true);
      setBtnText(() => btnTextConfirm);
      return;
    }

    let pointsHistoryArr = pointsHistory;
    pointsHistoryArr.shift();

    const ptsA = pointsHistoryArr[0].teamA;
    const ptsB = pointsHistoryArr[0].teamB;

    setPointsHistory(() => pointsHistoryArr);
    currentRoundRef.current -= 1;
    isUndoRef.current = true;

    updateScore(() => ({
      pointsA: ptsA,
      pointsB: ptsB
    }));

    setConfirm(() => false);
    setBtnText(() => btnTextUndo);
  };

  useEffect(() => {
    if (isUndoRef.current) {
      isUndoRef.current = false;
      return;
    }

    currentRoundRef.current += 1;

    const currentPoints = {
      round: currentRoundRef.current,
      teamA: score.pointsA,
      teamB: score.pointsB
    };

    setPointsHistory((prevHistoryPoints) => [
      currentPoints,
      ...prevHistoryPoints
    ]);
  }, [score.pointsA, score.pointsB]);

  const dismissHistoryModal = () => {
    visible.setModals((prevModals) => ({
      ...prevModals,
      pointsHistory: false
    }));

    setConfirm(() => false);
    setBtnText(() => btnTextUndo);
    historyButton.setShowPointsHistory(() => false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.roundTextContainer}>
        <Text style={styles.roundText}>{`${item.round}`}</Text>
      </View>
      <View style={styles.pointsTextContainer}>
        <Text style={styles.pointsText}>{`${item.teamA}`}</Text>
        <Text style={styles.pointsText}>x</Text>
        <Text style={styles.pointsText}>{`${item.teamB}`}</Text>
      </View>
    </View>
  );

  return (
    visible.modals.pointsHistory && (
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.teamsContainer}>
              <Text style={styles.teamsText}>{currentTeamAName}</Text>
              <Text style={styles.teamsText}>x</Text>
              <Text style={styles.teamsText}>{currentTeamBName}</Text>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={pointsHistory}
                contentContainerStyle={styles.flatListContainer}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>
            <View style={styles.buttonsContainer}>
              {pointsHistory.length > 1 && (
                <Pressable
                  style={[styles.button, styles.buttonUndo]}
                  onPress={() => undoLastPoint()}
                  disabled={pointsHistory.length > 1 ? false : true}
                >
                  <Text style={styles.buttonUndoText}>{btnText}</Text>
                </Pressable>
              )}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => dismissHistoryModal()}
              >
                <Text style={styles.buttonCloseText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    )
  );
};
