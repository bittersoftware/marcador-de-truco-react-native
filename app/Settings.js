import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Switch,
  Pressable,
} from 'react-native'
import styles from '../styles/settingsStyle'
import { useSettingsContext } from '../context/SettingsContext'
import { TeamDefinition } from '../src/components/TeamDefinition'
import { PageTitle } from '../src/components/PageTitle'
import { GameModes } from '../src/components/GameModes'
import { COLORS } from '../constants'
import pages from '../constants/pages'
import storageKeys from '../constants/storageKeys'
import { saveConfig } from '../src/misc/saveConfig'
import { useRouter } from 'expo-router'

export default Settings = () => {
  const navigation = useRouter()

  const { preventSleep, setPreventSleep } = useSettingsContext()

  const toggleSwitch = () => {
    setPreventSleep((previousState) => !previousState)
    saveConfig(storageKeys.preventSleep, !preventSleep)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <PageTitle text={'Configurações'} />
        <View style={styles.card}>
          <Text style={styles.sectionTextTitle}>Equipes padrão</Text>
          <TeamDefinition origin={pages.SETTINGS} />
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTextTitle}>Rodadas padrão</Text>
          <GameModes origin={pages.SETTINGS} />
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTextTitle}>Manter tela ligada</Text>
          <View style={styles.awakeSwitch}>
            <Switch
              trackColor={{ false: COLORS.gray, true: COLORS.lightTertiary }}
              thumbColor={preventSleep ? COLORS.tertiary : COLORS.gray3}
              onValueChange={toggleSwitch}
              value={preventSleep}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => navigation.replace(pages.HOME)}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
