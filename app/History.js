import { View, ImageBackground } from 'react-native';
import { PageTitle } from '../src/components/PageTitle';
import { HistoryList } from '../src/components/HistoryList';
import styles from '../styles/historyStyle';

export default function History() {
  return (
    <View style={styles.container}>
      <PageTitle text={'Histórico'} />
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/bg_center.png')}
      >
        <HistoryList />
      </ImageBackground>
    </View>
  );
}
