import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
  teamSettingsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 12,
    alignItems: 'center',
    marginBottom: 16,
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
    borderColor: COLORS.primary,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  teamInputContainer: {
    gap: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: COLORS.primary,
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
