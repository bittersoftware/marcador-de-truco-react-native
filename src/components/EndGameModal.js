import { Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { useSettingsContext } from '../../context/SettingsContext'
import { useEffect } from 'react'

export const EndGameModal = ({ visible, score, setScore, matches }) => {
  const { currentTeamAName, currentTeamBName, currentGameMode } =
    useSettingsContext()

  const MAX_POINTS = 12

  const getWinnerTeamName = () => {
    const hasAWon = score.pointsA === MAX_POINTS
    const hasBWon = score.pointsB === MAX_POINTS

    if (hasAWon || hasBWon) {
      return hasAWon ? currentTeamAName : currentTeamBName
    }
  }

  useEffect(() => {
    if (getWinnerTeamName()) {
      visible.setModals((prevModals) => ({
        ...prevModals,
        endOfMatch: true,
      }))
    }
  }, [score.pointsA, score.pointsB])

  const dismissAndRestart = () => {
    setScore(() => ({ pointsA: 0, pointsB: 0 }))
    visible.setModals((prevModals) => ({
      ...prevModals,
      endOfMatch: false,
    }))
  }

  return (
    visible.modals.endOfMatch && (
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>End of the Game</Text>
            <Text style={styles.modalText}>Winner: {getWinnerTeamName()}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => dismissAndRestart()}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
