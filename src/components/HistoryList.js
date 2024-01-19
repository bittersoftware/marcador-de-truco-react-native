import { useRef } from 'react';
import { Text, Pressable, FlatList, View } from 'react-native';
import { HistoryItem } from './HistoryItem';
import { ActivityIndicator } from 'react-native';
import styles from '../../styles/historyListStyle';

export const HistoryList = ({
  handleLoadMore,
  dataList,
  hasMoreData,
  isLoading,
  firstLoad
}) => {
  const flatListRef = useRef(null);

  const renderFooter = () => {
    if (!isLoading && hasMoreData.current) {
      return (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleLoadMore}>
            <Text style={styles.buttonText}>
              {isLoading ? 'Carregando' : 'Carregar mais'}
            </Text>
          </Pressable>
        </View>
      );
    }
    if (isLoading) return <ActivityIndicator />;
  };

  const scrollHandle = () => {
    if (firstLoad.current && dataList.current.length > 0) {
      return;
    }
    flatListRef.current.scrollToEnd();
  };

  return (
    <FlatList
      ref={flatListRef}
      onContentSizeChange={scrollHandle}
      data={dataList.current}
      renderItem={({ item }) => <HistoryItem data={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={renderFooter}
      style={styles.listContainer}
    />
  );
};