import { View, ImageBackground } from 'react-native';
import { PageTitle } from '../src/components/PageTitle';
import { HistoryList } from '../src/components/HistoryList';
import styles from '../styles/historyStyle';
import { banner } from '../src/ads/banner';
import { pages } from '../constants';

export default function History() {
  return (
    <View style={styles.container}>
      <PageTitle text={'Histórico'} />
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/bg_center.png')}
      >
        <HistoryList />
      <View>{banner(pages.HISTORY)}</View>
      </ImageBackground>
    </View>
  );
}
