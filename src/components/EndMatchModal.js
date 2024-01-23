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
            <Text style={styles.roundText}>Jogo {winsA + winsB}</Text>
            <Text style={styles.roundText}>Melhor de {max}</Text>
            <View style={styles.mainImageContainer}>
              <Image
                source={require('../../assets/images/trophy.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.winnerTeamTextContainer}>
              <Text style={styles.teamText}>{getWinnerTeamName()}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => dismissModal()}
                android_ripple={{ color: 'white', borderless: true }}
              >
                <Text style={styles.buttonText}>Próxima partida</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    )
  );
};
