import { useEffect, useState, useRef } from 'react'
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
} from 'react-native'
import { useSettingsContext } from '../../context/SettingsContext'

export const PointsHistoryModal = ({
  visible,
  score,
  updateScore,
  historyButton,
}) => {
  const { currentTeamAName, currentTeamBName } = useSettingsContext()
  const [pointsHistory, setPointsHistory] = useState([])
  const currentRoundRef = useRef(-1)
  const isUndoRef = useRef(false)

  const undoLastPoint = () => {
    if (pointsHistory[0].round === 0) return

    let pointsHistoryArr = pointsHistory
    pointsHistoryArr.shift()

    const ptsA = pointsHistoryArr[0].teamA
    const ptsB = pointsHistoryArr[0].teamB

    setPointsHistory(() => pointsHistoryArr)
    currentRoundRef.current -= 1
    isUndoRef.current = true

    updateScore(() => ({
      pointsA: ptsA,
      pointsB: ptsB,
    }))
  }

  useEffect(() => {
    if (isUndoRef.current) {
      isUndoRef.current = false
      return
    }

    currentRoundRef.current += 1

    const currentPoints = {
      round: currentRoundRef.current,
      teamA: score.pointsA,
      teamB: score.pointsB,
    }

    setPointsHistory((prevHistoryPoints) => [
      currentPoints,
      ...prevHistoryPoints,
    ])
  }, [score.pointsA, score.pointsB])

  const dismissHistoryModal = () => {
    visible.setModals((prevModals) => ({
      ...prevModals,
      pointsHistory: false,
    }))

    historyButton.setShowPointsHistory(() => false)
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>{`${item.round} ${currentTeamAName}: ${item.teamA} vs ${currentTeamBName}: ${item.teamB}`}</Text>
    </View>
  )

  return (
    visible.modals.pointsHistory && (
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              style={styles.list}
              data={pointsHistory}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
            />
            {pointsHistory.length > 1 && (
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => undoLastPoint()}
                disabled={pointsHistory.length > 1 ? false : true}
              >
                <Text style={styles.textStyle}>Desfazer Ultima</Text>
              </Pressable>
            )}
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
    backgroundColor: 'pink',
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
