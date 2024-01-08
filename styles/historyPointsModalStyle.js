import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

export const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    display: 'flex',
    margin: 20,
    width: '90%',
    height: '90%',
    backgroundColor: COLORS.tertiary,
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
  listContainer: {
    flex: 1,
    display: 'flex',
    marginBottom: 24,
  },
  flatListContainer: {
    paddingHorizontal: 24,
  },
  listItem: {
    alignSelf: 'center',
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    gap: 8,
  },
  teamsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  teamsText: {
    marginHorizontal: 4,
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold,
  },
  roundTextContainer: {
    borderRadius: 15,
    width: 26,
    height: 26,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    display: 'flex',
  },
  roundText: {
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
    textAlign: 'center',
    fontSize: SIZES.medium,
  },
  pointsTextContainer: {
    padding: 2,
    borderRadius: 30,
    borderColor: COLORS.primary,
    borderWidth: 2,
    margin: 4,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
  },
  pointsText: {
    fontFamily: FONT.semiBold,
    textAlign: 'left',
    fontSize: SIZES.medium,
    marginHorizontal: 6,
    color: COLORS.secondary,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 6,
  },
  buttonUndo: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    backgroundColor: COLORS.tertiary,
  },
  buttonClose: {
    backgroundColor: COLORS.primary,
    width: 150,
  },
  buttonCloseText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold,
    textAlign: 'center',
  },
  buttonUndoText: {
    color: COLORS.primary,
    fontFamily: FONT.semiBold,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
