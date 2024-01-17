import { useState, useEffect } from 'react';
import { ScoreDisplay } from '../src/components/ScoreDisplay';
import { TeamNamesDisplay } from '../src/components/TeamNamesDisplay';
import { PointsBoard } from '../src/components/PointsBoard';
import { BoardOptionsModal } from '../src/components/BoardOptionsModal';
import { FloatingActionButton } from '../src/components/FloatingActionButton';
import { useSettingsContext } from '../context/SettingsContext';
import { View, ToastAndroid } from 'react-native';
import { useNavigation } from 'expo-router';

export default ScoreBoard = () => {
  const navigation = useNavigation();

  const { currentTeamAName, currentTeamBName } = useSettingsContext();

  const [scoreData, setScoreData] = useState({
    pointsA: 0,
    pointsB: 0
  });

  const [modal, setModal] = useState(false);

  const [showPointsHistory, setShowPointsHistory] = useState(false);

  const [matchesData, setMatchesData] = useState({
    winnerTeam: '',
    matchesWonByA: 0,
    matchesWonByB: 0
  });

  const handleClickFloatingAction = () => {
    setModal(() => true);
  }

  const handleClickHistory = () => {
    setModal(() => false);
    setShowPointsHistory(true);
  }

  // prevent leaving the game when press/swipe back
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      if (
        e.data.action.type === 'GO_BACK' &&
        e.target.startsWith('ScoreBoard')
      ) {
        ToastAndroid.show(
          'Selecione Encerrar jogo e confirme',
          ToastAndroid.SHORT
        );
        handleClickFloatingAction();
        return
      }
      navigation.dispatch(e.data.action);
    })
  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScoreDisplay scoreData={scoreData} />
      <TeamNamesDisplay
        teamA={currentTeamAName}
        teamB={currentTeamBName}
        aWins={matchesData.matchesWonByA}
        bWins={matchesData.matchesWonByB}
      />
      <PointsBoard
        updateScore={setScoreData}
        score={scoreData}
        showHistory={{ showPointsHistory, setShowPointsHistory }}
        matchesData={matchesData}
        setMatchesData={setMatchesData}
      />
      <FloatingActionButton
        handleClickFloatingAction={handleClickFloatingAction}
      />
      <BoardOptionsModal
        visible={modal}
        setModal={setModal}
        handleClickHistory={handleClickHistory}
      />
    </View>
  );
}
