import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
} from 'react-native'

export const PointsHistory = (props) => {
  console.log(props.data)
  const dismissHistoryModal = () => {
    props.dismissModal()
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>{`${item.round} ${props.teamNames[0]}: ${item.teamA} vs ${props.teamNames[1]}: ${item.teamB}`}</Text>
    </View>
  )

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
        setModalVisible(props.dismissModal)
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <FlatList
            style={styles.list}
            data={props.data}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
          { props.data.length > 1 &&
          <Pressable 
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.undo()}
            disabled={ props.data.length > 1 ? false : true}
          >
            <Text style={styles.textStyle}>Desfazer Ultima</Text>
          </Pressable>}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => dismissHistoryModal()}
          >
            <Text style={styles.textStyle}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  list: {
    backgroundColor: "pink",
    flexGrow: 0,
    paddingBottom: 8,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 6,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
