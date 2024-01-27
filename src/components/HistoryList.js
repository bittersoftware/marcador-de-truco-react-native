import { useRef, useState, useEffect } from 'react';
import { Text, FlatList, View, Image } from 'react-native';
import { HistoryItem } from './HistoryItem';
import { ActivityIndicator } from 'react-native';
import dbUtils from '../database/database';
import styles from '../../styles/historyListStyle';

export const HistoryList = ({}) => {
  const flatListRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [page, setPage] = useState(1);

  const OFFSET = 8;

  useEffect(() => {
    fetchData(page);
    return () => {};
  }, [page]);

  const fetchData = async (page) => {
    try {
      const data = await dbUtils.readDataOffset(
        page.toString(),
        OFFSET,
        () => console.log('db load success'),
        (error) => console.log('error', error)
      );

      if (data && data.length > 0) {
        setDataList([...dataList, ...data]);
      }
      if (data.length > 0 && data[data.length - 1].id === 1) {
        setHasMoreData(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Image
        style={styles.emptyImage}
        source={require('../../assets/images/empty.png')}
      />
      <Text style={styles.emptyText}>
        Termine ao menos um jogo para ver o histórico.
      </Text>
    </View>
  );

  const handleLoadMore = () => {
    if (!isLoading && hasMoreData) {
      console.log('fetch next page:', page + 1);
      setPage(page + 1);
      setIsLoading(true);
    }
  };

  const hasData = dataList.length > 0;

  const renderFooter = () => {
    if (hasMoreData) {
      return (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {hasData && (
        <FlatList
          ref={flatListRef}
          style={styles.listContainer}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          data={dataList}
          renderItem={({ item }) => <HistoryItem data={item} />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderFooter}
        />
      )}
      {!hasData && renderEmpty()}
    </View>
  );
};
