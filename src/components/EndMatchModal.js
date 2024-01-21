import { Modal, Text, Pressable, View, Image } from 'react-native';
import { styles } from '../../styles/endMatchModalStyle';

export const EndMatchModal = ({
  modals,
  dismissModal,
  winsA,
  winsB,
  max,
  getWinnerTeamName
}) => {
  return (
    modals.endOfMatch && (
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
            <Text style={styles.roundText}>Melhor de {max}</Text>
            <Pressable style={styles.button} onPress={() => dismissModal()}>
              <Text style={styles.buttonText}>Próxima partida</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  );
};
