import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES, SHADOWS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  teamText: {
    marginTop: 12,
    fontSize: SIZES.large,
    textAlign: 'center',
    fontFamily: FONT.semiBold,
    color: COLORS.secondary,
    padding: 6,
    borderRadius: 6,
    alignSelf: 'center'
  },
  gridContainer: {
    flexDirection: 'row',
    marginVertical: 12,
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
    marginHorizontal: 6,
    ...SHADOWS.small
  },
  defaultAvatarStatus: {
    backgroundColor: COLORS.gray3
  },
  selectedAvatar: {
    backgroundColor: COLORS.tertiary
  },
  adversaryAvatar: {
    backgroundColor: COLORS.gray,
    opacity: 0.3,
  },
  image: {
    height: 90,
    width: 90,
    alignItems: 'center',
    resizeMode: 'contain',
    borderRadius: 45,
  },
});

export default styles;
