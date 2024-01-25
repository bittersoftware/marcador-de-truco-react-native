const COLORS = {
  primary: '#ecf0f1',
  secondary: '#312651',
  tertiary: '#4C6AF0',
  lightTertiary: '#dbe1fc',

  gray: '#83829A',
  gray2: '#C1C0C8',
  gray3: '#EEEEEE',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',

  transparent: '#FFFFFFFF'
};

const FONT = {
  regular: 'Font-Regular',
  medium: 'Font-Medium',
  semiBold: 'Font-SemiBold',
  bold: 'Font-Bold',
  game: 'Font-Game3',
  game2: 'Font-Game2',
  game3: 'Font-Game'
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5
  }
};

export { COLORS, FONT, SIZES, SHADOWS };
