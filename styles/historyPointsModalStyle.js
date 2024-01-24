import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

export const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    flex: 1
  },
  modalView: {
    display: 'flex',
    margin: 20,
    width: '90%',
    height: '90%',
    borderRadius: 20,
    paddingTop: 12,
    backgroundColor: COLORS.gray,
    paddingBottom: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    display: 'flex',
    marginBottom: 24
  },
  flatListContainer: {
    paddingHorizontal: 24
  },
  listItem: {
    alignSelf: 'center',
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8
  },
  teamsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  teamAText: {
    flex: 0.5,
    marginRight: 4,
    backgroundColor: COLORS.secondary,
    padding: 4,
    borderRadius: 8,
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite,
    textAlign: 'center',
    alignSelf: 'center'
  },
  teamBText: {
    flex: 0.5,
    marginLeft: 4,
    backgroundColor: COLORS.secondary,
    padding: 4,
    borderRadius: 8,
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold,
    color: COLORS.lightWhite,
    textAlign: 'center',
    alignSelf: 'center'
  },
  roundTextContainer: {
    borderRadius: 15,
    width: 26,
    height: 26,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    display: 'flex'
  },
  roundText: {
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
    textAlign: 'center',
    fontSize: SIZES.medium
  },
  pointsTextContainer: {
    padding: 2,
    borderRadius: 30,
    backgroundColor: COLORS.gray3,
    margin: 4,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center'
  },
  pointsText: {
    fontFamily: FONT.semiBold,
    textAlign: 'left',
    fontSize: SIZES.medium,
    marginHorizontal: 6,
    color: COLORS.secondary
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  secondaryButtonContainer: {
    marginVertical: 6,
    backgroundColor: COLORS.gray3,
    borderRadius: 36,
    width: 150
  },
  primaryButtonContainer: {
    marginVertical: 6,
    backgroundColor: COLORS.primary,
    borderRadius: 36,
    width: 150
  },
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  mainButtonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: FONT.semiBold,
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});
