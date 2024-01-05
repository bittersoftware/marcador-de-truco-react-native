import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

export const Home = () => {
  const navigation = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>
          Marcador{'\n'}de{'\n'}Truco
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.push('/NewGame')}
        >
          <Text style={styles.buttonText}>Novo Jogo</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.push('/History')}
        >
          <Text style={styles.buttonText}>Histórico</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.push('/Settings')}
        >
          <Text style={styles.buttonText}>Configurações</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  mainTextContainer: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  mainText: {
    display: 'flex',
    fontSize: 64,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 12,
    marginBottom: 18,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
})

