import React from 'react';
import {
  BannerAd,
  BannerAdSize,
  TestIds
} from 'react-native-google-mobile-ads';
import { pages } from '../../constants';

export const banner = (origin) => {
  let adUnitId = TestIds.ADAPTIVE_BANNER;

  const adUnitIdNewGame = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

  const adUnitIdChooseAvatar = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

  if (origin === pages.NEW_GAME) adUnitId = adUnitIdNewGame;
  if (origin === pages.CHOOSE_AVATAR) adUnitId = adUnitIdChooseAvatar;

  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        networkExtras: {
          collapsible: 'bottom'
        }
      }}
    />
  );
};
