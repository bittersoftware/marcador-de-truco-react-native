const getEndGameData = (
  endScoreData,
  currentTeamAName,
  currentTeamAAvatar,
  currentTeamBAvatar
) => {
  let winnerPerRound = [];
  let winnerTeam = '';
  let winnerAvatar = '';
  let loserTeam = '';
  let loserAvatar = '';
  let teamA = '';
  let teamB = '';


  endScoreData.map((round) => {
    [teamA, teamB] = Object.keys(round).sort();
    const winnerTeam = round[teamA] > round[teamB] ? teamA : teamB;
    winnerPerRound.push(winnerTeam);
  });

  const frequencyCount = {};

  winnerPerRound.forEach((element) => {
    frequencyCount[element] = (frequencyCount[element] || 0) + 1;
  });

  const teamAVictories = frequencyCount[teamA] ? frequencyCount[teamA] : 0;
  const teamBVictories = frequencyCount[teamB] ? frequencyCount[teamB] : 0;

  winnerTeam = teamAVictories > teamBVictories ? teamA : teamB;
  loserTeam = teamAVictories > teamBVictories ? teamB : teamA;
  winnerAvatar =
    winnerTeam === currentTeamAName ? currentTeamAAvatar : currentTeamBAvatar;
  loserAvatar =
    winnerTeam === currentTeamAName ? currentTeamBAvatar : currentTeamAAvatar;


  return {
    winnerTeam: winnerTeam,
    loserTeam: loserTeam,
    winsWinner: frequencyCount[winnerTeam],
    winsLoser: frequencyCount[loserTeam] ? frequencyCount[loserTeam] : 0,
    winnerAvatar: winnerAvatar,
    loserAvatar: loserAvatar
  };
};

const parseScoreData = (data) => {
  const gameData = getEndGameData(
    data.endScoreData,
    data.teamAName,
    data.teamAAvatar,
    data.teamBAvatar
  );
  const {
    winnerTeam,
    loserTeam,
    winsWinner,
    winsLoser,
    winnerAvatar,
    loserAvatar
  } = gameData;

  const scoreListWithInfo = data.endScoreData.map((round) => {
    const isWinnerRound = round[winnerTeam] > round[loserTeam];
    const winnerScore = round[winnerTeam];
    const loserScore = round[loserTeam];

    return { winnerScore, loserScore, isWinnerRound };
  });

  return {
    winnerTeam,
    loserTeam,
    winsWinner,
    winsLoser,
    winnerAvatar,
    loserAvatar,
    scoreList: scoreListWithInfo
  };
};

export const generateEndScore = (data) => parseScoreData(data);
