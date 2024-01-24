import React from 'react';
import { View, Pressable, ToastAndroid } from 'react-native';
import { styles } from '../../styles/pointsButtonsStyle';
import * as Haptics from 'expo-haptics';

export const PointsButtons = ({ team, selectedIndex, onScoreChange }) => {
  const pointsList = Array.from({ length: 13 })
    .fill(0)
    .map((_, idx) => idx)
    .reverse();

  const getButtonStyle = (index) => {
    if (index === selectedIndex) {
      return styles.buttonSelected;
    } else if (!isInNextPoints(index)) {
      return styles.buttonPastPoint;
    } else if (isInNextPoints(index) && isValidPoint(index)) {
      return styles.buttonValidPoint;
    } else if (isInNextPoints && !isValidPoint(index)) {
      return styles.buttonInvalidPoint;
    }
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handlePress = async (el) => {
    try {
      if (!isInNextPoints(el)) {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        showToast('Use Rodadas para desfazer jogadas');
      } else if (!isValidPoint(el)) {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        showToast('Pega ladrão! Esse valor não vale.');
      } else {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onScoreChange(team, el);
      }
    } catch (error) {
      console.error('Error triggering haptics:', error);
    }
  };

  const isValidPoint = (index) => {
    return (
      (index - selectedIndex) % 3 === 0 ||
      index === selectedIndex + 1 ||
      index === 12
    );
  };

  const isInNextPoints = (index) => {
    return index > selectedIndex;
  };

  return pointsList.map((el) => (
    <View key={`${team}-${el}`} style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, getButtonStyle(el)]}
        onPress={() => handlePress(el)}
      />
    </View>
  ));
};
