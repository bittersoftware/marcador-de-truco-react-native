import { useRouter } from 'expo-router';
import { Image, View, Pressable, ScrollView, ToastAndroid, Text } from 'react-native';
import images from '../constants/images';
import styles from '../styles/chooseAvatarStyle';
import { useLocalSearchParams } from 'expo-router';
import { useSettingsContext } from '../context/SettingsContext';
import { PageTitle } from '../src/components/PageTitle';
import storageKeys from '../constants/storageKeys';
import { saveConfig } from '../src/misc/saveConfig';
import { pages } from '../constants';
import { banner } from '../src/ads/banner';

export default ChooseAvatar = () => {
  const navigation = useRouter();

  const {
    currentTeamAName,
    currentTeamBName,
    defaultTeamAName,
    defaultTeamBName,
    currentTeamAAvatar,
    setCurrentTeamAAvatar,
    currentTeamBAvatar,
    setCurrentTeamBAvatar,
    defaultTeamAAvatar,
    setDefaultTeamAAvatar,
    defaultTeamBAvatar,
    setDefaultTeamBAvatar
  } = useSettingsContext();

  const avatars = [
    images.avatar1,
    images.avatar2,
    images.avatar3,
    images.avatar4,
    images.avatar5,
    images.avatar6,
    images.avatar7,
    images.avatar8,
    images.avatar9
  ];

  const { teamName, origin } = useLocalSearchParams();

  const states = {
    [pages.SETTINGS]: {
      [storageKeys.teamAName]: defaultTeamAName,
      [storageKeys.teamBName]: defaultTeamBName,
      [storageKeys.teamAAvatar]: defaultTeamAAvatar,
      [storageKeys.teamBAvatar]: defaultTeamBAvatar
    },
    [pages.NEW_GAME]: {
      [storageKeys.teamAName]: currentTeamAName,
      [storageKeys.teamBName]: currentTeamBName,
      [storageKeys.teamAAvatar]: currentTeamAAvatar,
      [storageKeys.teamBAvatar]: currentTeamBAvatar
    }
  };

  const getCurrentAvatar = (item) => {
    if (
      teamName === states[origin][storageKeys.teamAName] &&
      item == states[origin][storageKeys.teamAAvatar]
    ) {
      return [styles.item, styles.selectedAvatar];
    }
    if (
      teamName === states[origin][storageKeys.teamBName] &&
      item == states[origin][storageKeys.teamBAvatar]
    ) {
      return [styles.item, styles.selectedAvatar];
    }
    if (
      teamName === states[origin][storageKeys.teamAName] &&
      item == states[origin][storageKeys.teamBAvatar]
    ) {
      return [styles.item, styles.adversaryAvatar];
    }
    if (
      teamName === states[origin][storageKeys.teamBName] &&
      item == states[origin][storageKeys.teamAAvatar]
    ) {
      return [styles.item, styles.adversaryAvatar];
    }
    return [styles.item, styles.defaultAvatarStatus];
  };

  const isDisabled = (item) => {
    return (
      (teamName === currentTeamAName &&
        item == states[origin][storageKeys.teamBAvatar]) ||
      (teamName === currentTeamBName &&
        item == states[origin][storageKeys.teamAAvatar])
    );
  };

  const selectAvatar = (item) => {
    if (isDisabled(item)) {
      ToastAndroid.show('Já escolhido pela outra equipe.', ToastAndroid.SHORT);
      return;
    }

    if (
      teamName === states[origin][storageKeys.teamAName] &&
      origin == pages.SETTINGS
    ) {
      setDefaultTeamAAvatar(item);
      setCurrentTeamAAvatar(item);
      saveConfig(storageKeys.teamAAvatar, item);
    }
    if (
      teamName === states[origin][storageKeys.teamAName] &&
      origin == pages.NEW_GAME
    ) {
      setCurrentTeamAAvatar(item);
    }
    if (
      teamName === states[origin][storageKeys.teamBName] &&
      origin === pages.SETTINGS
    ) {
      setDefaultTeamBAvatar(item);
      setCurrentTeamBAvatar(item);
      saveConfig(storageKeys.teamBAvatar, item);
    }
    if (
      teamName === states[origin][storageKeys.teamBName] &&
      origin === pages.NEW_GAME
    ) {
      setCurrentTeamBAvatar(item);
    }

    navigation.back();
  };

  return (
    <View style={styles.container}>
      <PageTitle text={'Selecione Avatar'} />
      <ScrollView>
        <Text style={styles.teamText}>{teamName}</Text>
        <View style={styles.gridContainer}>
          {avatars.map((item, idx) => (
            <Pressable
              key={idx}
              onPress={() => selectAvatar(item)}
              style={() => getCurrentAvatar(item)}
            >
              <Image
                source={item}
                style={[styles.image, () => getCurrentAvatar(item)]}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View>{banner(pages.CHOOSE_AVATAR)}</View>
    </View>
  );
};
