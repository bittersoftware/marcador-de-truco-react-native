import { Image, Text, View, StyleSheet, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

export const Home = () => {
  const navigation = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/home-img.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Marcador de Truco</Text>
        <Text style={styles.subText}>
          Marque seus pontos e tenha um registro das partidas para tirar uma
          onda e compartilhar nas redes sociais.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={[styles.button, styles.mainButton]}
          onPress={() => navigation.push('/NewGame')}
        >
          <Text style={[styles.buttonText, styles.mainButtonText]}>
            Novo Jogo
          </Text>
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
    alignItems: 'center',
    padding: 32,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 24,
  },
  image: {
    width: 200,
    height: 180,
  },
  mainTextContainer: {
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  mainText: {
    display: 'flex',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Font-SemiBold',
  },
  subText: {
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Font-Regular',
    marginHorizontal: 30,
    color: 'gray',
    padding: 8,
  },
  buttonsContainer: {
    flex: 1,
    paddingTop: 36,
  },
  button: {
    borderColor: 'gray',
    borderWidth: 4,
    padding: 12,
    marginBottom: 18,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'center',
    borderRadius: 36,
  },
  mainButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    fontSize: 18,
    color: 'gray',
    fontFamily: 'Font-SemiBold',
  },
  mainButtonText: {
    color: 'white',
    fontFamily: 'Font-SemiBold',
  },
})
