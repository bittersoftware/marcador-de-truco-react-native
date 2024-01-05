import { Image, Text, View, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import styles from '../styles/homeStyle'

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
