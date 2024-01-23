import { View, Image, Text, Pressable } from 'react-native';
import styles from '../../styles/historyItemsStyle';
import { useRouter } from 'expo-router';
import { pages } from '../../constants';
import { SimpleLineIcons } from '@expo/vector-icons';

export const HistoryItem = ({ data }) => {
  const navigation = useRouter();

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

  const openEndGame = (id) => {
    navigation.push({
      pathname: pages.END_GAME,
      params: { id: id, origin: pages.HISTORY }
    });
  };

  return (
    <Pressable onPress={() => openEndGame(data.id)} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <View style={styles.timeTextContainer}>
            <Text style={styles.timeText}>{data.id}</Text>
            <Text style={styles.timeText}>{data.time?.split(' ')[1]}</Text>
            <Text style={styles.timeText}>{data.time?.split(' ')[0]}</Text>
          </View>
          <View style={styles.iconContainer}>
            <SimpleLineIcons name="options" size={18} color="gray" />
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
              {data.scoreList.map((data, index) => renderRounds(data, index))}
            </View>
          </View>
          {renderTeam(data.loserTeam, data.loserAvatar)}
        </View>
      </View>
    </Pressable>
  );
};
