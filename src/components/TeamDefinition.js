import { View, Pressable, Image, TextInput } from 'react-native'
import styles from '../../styles/teamDefinitionStyle'

const MAX_CHARS = 15

/**
 * Component that renders team setup
 * Avatar image and team name
 *
 * @param {string} teamName - name to be used as default value
 * @function {function} setCurrentTeamName
 * @param {number} avatar - reference to avatar image
 */
export const TeamDefinition = ({ teamName, setCurrentTeamName, avatar }) => (
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
