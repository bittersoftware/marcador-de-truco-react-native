import { View, Image, Text } from 'react-native';
import styles from '../../styles/historyItemsStyle';

export const HistoryItem = ({ data }) => {
  console.log(data.scoreList);
  const renderTeam = (name, avatar) => {
    return (
      <View style={styles.teamsContainer}>
        <View style={styles.imageContainer}>
          <Image source={avatar} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
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

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {renderTeam(data.winnerTeam, data.winnerAvatar)}
        <View style={styles.middleContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>{data.winsWinner}</Text>
            <Text style={styles.scoreText}>x</Text>
            <Text style={styles.scoreText}>{data.winsLoser}</Text>
          </View>
          <View style={styles.roundsContainer}>
            {data.scoreList.map((data, index) => renderRounds(data, index))}
          </View>
        </View>
        {renderTeam(data.loserTeam, data.loserAvatar)}
      </View>
    </View>
  );
};
