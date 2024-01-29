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
    : 'ca-app-pub-4711925247199151/4201756812';

  const adUnitIdChooseAvatar = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : 'ca-app-pub-4711925247199151/3001189937';

  const adUnitIdHistory = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : 'ca-app-pub-4711925247199151/6060003084';

  if (origin === pages.NEW_GAME) adUnitId = adUnitIdNewGame;
  if (origin === pages.CHOOSE_AVATAR) adUnitId = adUnitIdChooseAvatar;
  if (origin === pages.HISTORY) adUnitId = adUnitIdHistory;

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
