import React from 'react';
import { View, Pressable, Image, TextInput } from 'react-native';
import styles from '../../styles/teamDefinitionStyle';
import { useSettingsContext } from '../../context/SettingsContext';
import { useRouter } from 'expo-router';
import pages from '../../constants/pages';
import { saveConfig } from '../misc/saveConfig';
import storageKeys from '../../constants/storageKeys';

export const TeamDefinition = ({ origin }) => {
  const navigation = useRouter();
  const MAX_CHARS = 15;

  const {
    currentTeamAAvatar,
    currentTeamAName,
    setCurrentTeamAName,
    currentTeamBAvatar,
    currentTeamBName,
    setCurrentTeamBName,
    defaultTeamAAvatar,
    defaultTeamAName,
    setDefaultTeamAName,
    defaultTeamBAvatar,
    defaultTeamBName,
    setDefaultTeamBName
  } = useSettingsContext();

  const renderTeamAComponent = () => {
    if (origin === pages.SETTINGS) {
      return renderSingleTeamDefinition(
        defaultTeamAName,
        defaultTeamAAvatar,
        (text) => {
          setDefaultTeamAName(text);
          setCurrentTeamAName(text);
          saveConfig(storageKeys.teamAName, text);
        }
      );
    }
    if (origin === pages.NEW_GAME) {
      return renderSingleTeamDefinition(
        currentTeamAName,
        currentTeamAAvatar,
        (text) => setCurrentTeamAName(text)
      );
    }
  };

  const renderTeamBComponent = () => {
    if (origin === pages.SETTINGS) {
      return renderSingleTeamDefinition(
        defaultTeamBName,
        defaultTeamBAvatar,
        (text) => {
          setDefaultTeamBName(text);
          setCurrentTeamBName(text);
          saveConfig(storageKeys.teamBName, text);
        }
      );
    }
    if (origin === pages.NEW_GAME) {
      return renderSingleTeamDefinition(
        currentTeamBName,
        currentTeamBAvatar,
        (text) => setCurrentTeamBName(text)
      );
    }
  };

  const renderSingleTeamDefinition = (teamName, avatar, handleTextChange) => (
    <View style={styles.teamSettingsContainer}>
      <Pressable
        onPress={() =>
          navigation.push({
            pathname: pages.CHOOSE_AVATAR,
            params: { teamName: teamName, origin: origin }
          })
        }
        style={styles.avatarContainer}
      >
        <Image source={avatar} style={styles.avatar} />
      </Pressable>
      <View style={styles.teamInputContainer}>
        <TextInput
          style={styles.teamInputText}
          maxLength={MAX_CHARS}
          defaultValue={teamName}
          placeholder={'Adicione um nome'}
          placeholderTextColor={styles.placeHolderText.color}
          onChangeText={handleTextChange}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderTeamAComponent()}
      {renderTeamBComponent()}
    </View>
  );
};
