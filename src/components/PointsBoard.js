import { useEffect, useState, useRef, Component } from 'react';
import { View } from 'react-native';
import { PointsButtons } from './PointsButtons';
import { PointsLabels } from './PointsLabels';
import { EndMatchModal } from './EndMatchModal';
import { PointsHistoryModal } from './PointsHistoryModal';
import { styles } from '../../styles/pointsBoardStyle';
import { useSettingsContext } from '../../context/SettingsContext';
import { generateEndScore } from '../misc/generateEndScoreData';
import { useRouter } from 'expo-router';
import { pages } from '../../constants';
import { gameModes } from '../misc/gameModes';
import dbUtils from '../database/database';

export const PointsBoard = ({
  setScoreData,
  score,
  showHistory,
  matchesData,
  setMatchesData
}) => {
  const navigation = useRouter();

  // import context variables
  const {
    currentTeamAName,
    currentTeamBName,
    currentGameMode,
    currentTeamAAvatar,
    currentTeamBAvatar
  } = useSettingsContext();
  // set state of two modals
  const [modals, setModals] = useState({
    pointsHistory: false,
    endOfMatch: false
  });
  // Final data of match. Will contain data to be displayed in EndGame
  const [endScoreData, setEndScoreData] = useState([]);
  // Points history array
  const [pointsHistory, setPointsHistory] = useState([]);
  // Count the round number for logic of best of N games
  const currentRoundRef = useRef(-1);

  // reference values to evaluate and of match and end of game
  const MAX_POINTS = 12;
  const MAX_WINS = gameModes[currentGameMode].maxWins;
  const MAX_MATCHES = gameModes[currentGameMode].maxMatches;

  /**
   * Returns the name of the winner team
   * In case one of the teams reached max points
   *
   * @returns {string} Team Name
   */
  const getWinnerTeamName = () => {
    const hasAWon = score.pointsA === MAX_POINTS;
    const hasBWon = score.pointsB === MAX_POINTS;

    if (hasAWon || hasBWon) {
      return hasAWon ? currentTeamAName : currentTeamBName;
    }
  };

  /**
   * Update team score
   *
   * @param {string} team name
   * @param {number} points
   */
  const handleScoreChange = (team, points) => {
    if (team === currentTeamAName) {
      setScoreData((prevScoreData) => ({
        pointsA: points,
        pointsB: prevScoreData.pointsB
      }));
    }

    if (team === currentTeamBName) {
      setScoreData((prevScoreData) => ({
        pointsA: prevScoreData.pointsA,
        pointsB: points
      }));
    }
  };

  /**
   * Update endScoreData
   * It adds info for each match result
   * Winner and loser team and the score of each
   *
   * @param {string} winnerTeam
   */
  const updateScoreData = (winnerTeam) => {
    const winnerScore =
      score.pointsA > score.pointsB ? score.pointsA : score.pointsB;

    const loserScore =
      score.pointsA < score.pointsB ? score.pointsA : score.pointsB;

    const loserTeam =
      winnerTeam == currentTeamAName ? currentTeamBName : currentTeamAName;

    setEndScoreData((prevEndScoreData) => [
      ...prevEndScoreData,
      { [winnerTeam]: winnerScore, [loserTeam]: loserScore }
    ]);
  };

  /**
   * Checks if there is a winner for the match
   * If a team reached the max points, increase the matches won by team
   *
   */
  useEffect(() => {
    const winnerTeam = getWinnerTeamName();

    if (winnerTeam) {
      setMatchesData((prevSetMatches) => ({
        winnerTeam: winnerTeam,
        matchesWonByA:
          winnerTeam === currentTeamAName
            ? prevSetMatches.matchesWonByA + 1
            : prevSetMatches.matchesWonByA,
        matchesWonByB:
          winnerTeam === currentTeamBName
            ? prevSetMatches.matchesWonByB + 1
            : prevSetMatches.matchesWonByB
      }));

      updateScoreData(winnerTeam);
    }
  }, [score]);

  /**
   * Handle points history visibility
   *
   */
  useEffect(() => {
    setModals((prevModals) => ({
      ...prevModals,
      pointsHistory: showHistory.showPointsHistory
    }));
  }, [showHistory.showPointsHistory]);

  const isEndOfGame = () => {
    return (
      matchesData.matchesWonByA >= MAX_WINS ||
      matchesData.matchesWonByB >= MAX_WINS
    );
  };

  /**
   * Generate end data
   * Store data in db
   * End of match modal set visible false
   * Navigate to EndGame
   *
   */
  const handleEndOfGame = () => {
    // generate end data
    const result = generateEndScore({
      endScoreData: endScoreData,
      teamAName: currentTeamAName,
      teamAAvatar: currentTeamAAvatar,
      teamBAvatar: currentTeamBAvatar
    });

    // dismiss modal
    setModals((prevModals) => ({
      ...prevModals,
      endOfMatch: false
    }));

    console.log('try to store in db')
    // store data in db
    dbUtils.storeNewRow(
      result,
      (insertedId) => {
        console.log('Row inserted with ID:', insertedId);
        // nav replace with props id = element saved in db
        navigation.replace({
          pathname: pages.END_GAME,
          params: { id: insertedId }
        });
      },
      (error) => {
        console.error('Error storing new row:', error);
      }
    );
  };

  /**
   * Checks if each team reached the max points
   * After that, checks if is end of game or end or match (best of N)
   * Handle each case
   *
   */
  useEffect(() => {
    if (getWinnerTeamName()) {
      if (isEndOfGame()) {
        handleEndOfGame();
      } else {
        setModals((prevModals) => ({
          ...prevModals,
          endOfMatch: true
        }));
      }
    }
  }, [score.pointsA, score.pointsB, matchesData]);

  const dismissAndRestart = () => {
    setPointsHistory(() => []);
    currentRoundRef.current = -1;

    setScoreData(() => ({ pointsA: 0, pointsB: 0 }));

    setModals((prevModals) => ({
      ...prevModals,
      endOfMatch: false
    }));
  };

  /**
   * Generate points history modal
   *
   * @returns {Component}
   */
  const renderPointsHistoryModal = () => {
    return (
      <PointsHistoryModal
        visible={{ modals, setModals }}
        score={score}
        setScoreData={setScoreData}
        historyButton={showHistory}
        pointsHistory={pointsHistory}
        setPointsHistory={setPointsHistory}
        currentRoundRef={currentRoundRef}
      />
    );
  };

  /**
   * Generate end of match modal
   *
   * @returns {Component}
   */
  const renderEndMatchModal = () => {
    return (
      <EndMatchModal
        modals={modals}
        dismissModal={dismissAndRestart}
        winsA={matchesData.matchesWonByA}
        winsB={matchesData.matchesWonByB}
        max={MAX_MATCHES}
        getWinnerTeamName={getWinnerTeamName}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <PointsButtons
          team={currentTeamAName}
          selectedIndex={score.pointsA}
          onScoreChange={handleScoreChange}
        />
      </View>
      <View>
        <PointsLabels />
      </View>
      <View>
        <PointsButtons
          team={currentTeamBName}
          selectedIndex={score.pointsB}
          onScoreChange={handleScoreChange}
        />
      </View>
      <View>{renderPointsHistoryModal()}</View>
      <View>{renderEndMatchModal()}</View>
    </View>
  );
};
