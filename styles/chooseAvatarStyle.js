import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  teamText: {
    marginTop: 32,
    fontSize: SIZES.large,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.primary,
    backgroundColor: COLORS.lightTertiary,
    padding: 6,
    borderRadius: 6,
    alignSelf: 'center'
  },
  gridContainer: {
    flexDirection: 'row',
    marginVertical: 36,
    marginHorizontal: 12,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center'
  },
  item: {
    marginVertical: 6,
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.small
  },
  defaultAvatarStatus: {
    backgroundColor: COLORS.gray3
  },
  selectedAvatar: {
    backgroundColor: COLORS.tertiary
  },
  adversaryAvatar: {
    backgroundColor: COLORS.secondary
  },
  image: {
    height: 90,
    width: 90,
    alignItems: 'center',
    resizeMode: 'contain',
    borderRadius: 45
  },
  confirmButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 64
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    width: 130,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center'
  },
  confirmButtonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.semiBold,
    fontSize: SIZES.medium,
    textAlign: 'center'
  }
});

export default styles;
