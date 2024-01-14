import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.gray3,
    marginHorizontal: 30,
    marginVertical: 8,
  },
  teamSettingsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatar: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderRadius: 25,
    resizeMode: 'contain',
    backgroundColor: COLORS.gray3
  },
  teamInputContainer: {
    gap: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.gray3,
    borderRadius: 23,
    flex: 1,
  },
  teamInputText: {
    fontFamily: FONT.semiBold,
    color: COLORS.gray,
    flexGrow: 1,
  },
  placeHolderText: {
    color: COLORS.gray2,
  }
})

export default styles
