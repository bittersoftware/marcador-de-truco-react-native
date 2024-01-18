import { View, Image, Text } from 'react-native';
import styles from '../../styles/historyItemsStyle';

export const HistoryItem = ({ data }) => {
  //console.log('data', data);
  //console.log('scoreList', data.scoreList);
  const renderTeam = (name, avatar) => {
    return (
      <View style={styles.teamsContainer}>
        <View style={styles.imageContainer}>
          <Image source={avatar} style={styles.image} />
        </View>
        <View style={styles.teamTextContainer}>
          <Text style={styles.teamText}>{name}</Text>
        </View>
      </View>
    );
  };

  const renderRounds = (data, index) => {
    return (
      <View
        key={index}
        style={data.isWinnerRound ? styles.roundWin : styles.roundLose}
      />
    );
  };
  //{data.scoreList.map((data, index) => renderRounds(data, index))}

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <View style={styles.indexTextContainer}>
            <Text style={styles.indexText}>{data.id}</Text>
          </View>
          <View style={styles.timeTextContainer}>
            <Text style={styles.timeText}>{data.time?.split(' ')[1]}</Text>
            <Text style={styles.timeText}>{data.time?.split(' ')[0]}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          {renderTeam(data.winnerTeam, data.winnerAvatar)}
          <View style={styles.middleContainer}>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{data.winsWinner}</Text>
              <Text style={styles.scoreText}>x</Text>
              <Text style={styles.scoreText}>{data.winsLoser}</Text>
            </View>
            <View style={styles.roundsContainer}>
              <Text>scorelist</Text>
            </View>
          </View>
          {renderTeam(data.loserTeam, data.loserAvatar)}
        </View>
      </View>
    </View>
  );
};
