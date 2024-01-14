import React from 'react'
import { View, Pressable, Image, TextInput } from 'react-native'
import styles from '../../styles/teamDefinitionStyle'
import { useSettingsContext } from '../../context/SettingsContext'
import { useRouter } from 'expo-router'

export const TeamDefinition = () => {
  const navigation = useRouter()
  const MAX_CHARS = 15

  const {
    currentTeamAAvatar,
    currentTeamAName,
    setCurrentTeamAName,
    currentTeamBAvatar,
    currentTeamBName,
    setCurrentTeamBName,
  } = useSettingsContext()

  const renderSingleTeamDefinition = (teamName, setCurrentTeamName, avatar) => (
    <View style={styles.teamSettingsContainer}>
      <Pressable
        onPress={() =>
          navigation.push({
            pathname: '/ChooseAvatar',
            params: { teamName: teamName },
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
          onChangeText={(text) => setCurrentTeamName(text)}
        />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {renderSingleTeamDefinition(
        currentTeamAName,
        setCurrentTeamAName,
        currentTeamAAvatar
      )}
      {renderSingleTeamDefinition(
        currentTeamBName,
        setCurrentTeamBName,
        currentTeamBAvatar
      )}
    </View>
  )
}
