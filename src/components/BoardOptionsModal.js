import { Modal, View } from 'react-native'
import { ScoreBoardCTAs } from './ScoreBoardCTAs'
import { styles } from '../../styles/boardOptionsModalStyle'

export const BoardOptionsModal = ({
  visible,
  handleClickHistory,
  setModal,
}) => {
  return (
    visible && (
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScoreBoardCTAs
              pointsHistory={handleClickHistory}
              setModal={setModal}
            />
          </View>
        </View>
      </Modal>
    )
  )
}
