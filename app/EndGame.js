import {
  Text,
  Pressable,
  View,
  Image,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import { styles } from '../styles/endGameStyle';
import { useRouter } from 'expo-router';
import { useSettingsContext } from '../context/SettingsContext';
import { pages } from '../constants';
import dbUtils from '../src/database/database';
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import { useNavigation } from 'expo-router';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

export default EndGame = () => {
  const navigation = useRouter();
  const nav = useNavigation();
  const { id } = useLocalSearchParams();
  const [isItemLoading, setIsItemLoading] = useState(true);
  const [result, setResult] = useState(null);
  const viewToSnapshot = useRef();
  const [snapshotImg, setSnapshotImg] = useState();
  const [isSnapshot, setIsSnapshot] = useState(false);
  const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitId);

  const onShare = async () => {
    try {
      setIsSnapshot(true);
      const uri = await captureRef(viewToSnapshot);
      setSnapshotImg(uri);
      console.log(uri);
      await Sharing.shareAsync(uri);
      setIsSnapshot(false);
    } catch (error) {
      console.log('err', error);
    }
  };

  const fetchData = async (id) => {
    try {
      const data = await dbUtils.getItem(
        id,
        (data) => console.log('success', data),
        (error) => console.log('error', error)
      );
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsItemLoading(false);
    }
  };

  useEffect(() => {
    fetchData(id);
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      // Action after the ad is closed
      navigation.replace(pages.HOME);
    }
  }, [isClosed]);

  // prevent leaving the game when press/swipe back
  // Need to select button
  useEffect(() => {
    nav.addListener('beforeRemove', (e) => {
      e.preventDefault();
      if (e.data.action.type === 'GO_BACK' && e.target.startsWith('EndGame')) {
        ToastAndroid.show('Selecione Fechar', ToastAndroid.SHORT);
        return;
      }
      nav.dispatch(e.data.action);
    });
  }, []);

  if (isItemLoading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const rounds = result.scoreList.map((data, index) => (
    <View key={index}>
      <View style={styles.singleRoundContainer}>
        <View style={styles.roundsScoreContainer}>
          <Text style={styles.roundScoreText}>{data.winnerScore}</Text>
          <Text style={styles.roundScoreText}>x</Text>
          <Text style={styles.roundScoreText}>{data.loserScore}</Text>
        </View>
        <View
          style={
            data.isWinnerRound
              ? [styles.roundMark, styles.winnerMark]
              : [styles.roundMark, styles.loserMark]
          }
        />
      </View>
    </View>
  ));

  const dismissAndGoHome = () => {
    navigation.replace(pages.HOME);
  };

  return (
    <View style={styles.container}>
      <View
        ref={viewToSnapshot}
        collapsable={false}
        style={styles.contentContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.mainText}>FIM DE JOGO</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/images/crown.png')}
            style={styles.crown}
          />
          <View style={styles.avatarBackground}>
            <Image source={result.winnerAvatar} style={styles.avatar} />
          </View>
        </View>
        <View style={styles.winnerContainer}>
          <View style={styles.winnerTeamTextContainer}>
            <Text style={styles.winnerTeamText}>{result.winnerTeam}</Text>
          </View>
        </View>
        <Text style={styles.scoreText}>
          {result.winsWinner} x {result.winsLoser}
        </Text>
        <View style={styles.loserTeamTextContainer}>
          <Text style={styles.loserTeamText}>{result.loserTeam}</Text>
        </View>
        <View style={styles.roundsContainer}>{rounds}</View>
        {!isSnapshot && (
          <View>
            <View style={styles.buttonContainer}>
              <Pressable
                onPress={onShare}
                style={styles.button}
                android_ripple={{ color: 'white', borderless: true }}
              >
                <Text style={styles.buttonText}>Compartilhar</Text>
              </Pressable>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                onPress={() => {
                  if (isLoaded) {
                    show();
                  } else {
                    navigation.replace(pages.HOME);
                  }
                }}
                style={styles.button}
                android_ripple={{ color: 'white', borderless: true }}
              >
                <Text style={styles.buttonText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        )}
        <View style={styles.footerContainer}>
          <View style={styles.footerRowContainer}>
            <FontAwesome5 name="google-play" size={16} color="white" />
            <Text style={styles.footerText}>Marcador Truco</Text>
            <Image
              source={require('../assets/images/icon.png')}
              style={styles.footerLogo}
            />
            <Text style={styles.footerText}>by bittersoftware</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
