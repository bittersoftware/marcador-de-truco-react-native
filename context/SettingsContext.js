import React, { createContext, useContext, useEffect, useState } from 'react';
import { applyDefaults } from '../src/misc/defaults';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '../constants/storageKeys';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [defaultTeamAName, setDefaultTeamAName] = useState(null);
  const [defaultTeamBName, setDefaultTeamBName] = useState(null);
  const [defaultTeamAAvatar, setDefaultTeamAAvatar] = useState(null);
  const [defaultTeamBAvatar, setDefaultTeamBAvatar] = useState(null);
  const [defaultGameMode, setDefaultGameMode] = useState('');
  const [preventSleep, setPreventSleep] = useState(true);
  const [currentTeamAName, setCurrentTeamAName] = useState(null);
  const [currentTeamBName, setCurrentTeamBName] = useState(null);
  const [currentTeamAAvatar, setCurrentTeamAAvatar] = useState(null);
  const [currentTeamBAvatar, setCurrentTeamBAvatar] = useState(null);
  const [currentGameMode, setCurrentGameMode] = useState(null);

  useEffect(() => {
    const settingsSetup = async () => {
      await applyDefaults();

      // parse objects
      const teamAAvatarString = await AsyncStorage.getItem(
        storageKeys.teamAAvatar
      );
      const teamAAvatar = JSON.parse(teamAAvatarString);
      const teamBAvatarString = await AsyncStorage.getItem(
        storageKeys.teamBAvatar
      );
      const teamBAvatar = JSON.parse(teamBAvatarString);
      const gameModeString = await AsyncStorage.getItem(storageKeys.gameMode);

      // convert to int
      const gameMode = Number(gameModeString);

      const preventSleepString = await AsyncStorage.getItem(
        storageKeys.preventSleep
      );
      const preventSleep = preventSleepString === 'true';

      // apply values
      setDefaultTeamAName(await AsyncStorage.getItem(storageKeys.teamAName));
      setDefaultTeamBName(await AsyncStorage.getItem(storageKeys.teamBName));
      setDefaultTeamAAvatar(teamAAvatar);
      setDefaultTeamBAvatar(teamBAvatar);
      setDefaultGameMode(gameMode);
      setPreventSleep(preventSleep);
    }

    settingsSetup();
  }, []);

  const values = {
    currentTeamAAvatar,
    setCurrentTeamAAvatar,
    currentTeamAName,
    currentTeamBAvatar,
    setCurrentTeamBAvatar,
    setCurrentTeamAName,
    currentTeamBName,
    setCurrentTeamBName,
    defaultTeamAAvatar,
    setDefaultTeamAAvatar,
    defaultTeamAName,
    setDefaultTeamAName,
    defaultTeamBName,
    defaultTeamBAvatar,
    setDefaultTeamBAvatar,
    setDefaultTeamBName,
    currentGameMode,
    setCurrentGameMode,
    defaultGameMode,
    setDefaultGameMode,
    preventSleep,
    setPreventSleep
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettingsContext = () => {
  return useContext(SettingsContext);
}
