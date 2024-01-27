import { useRef, useState, useEffect } from 'react';
import { Text, Pressable, FlatList, View, Image } from 'react-native';
import { HistoryItem } from './HistoryItem';
import { ActivityIndicator } from 'react-native';
import dbUtils from '../database/database';
import styles from '../../styles/historyListStyle';

export const HistoryList = ({}) => {
  const flatListRef = useRef(null);
  //const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const hasMoreData = useRef(true);
  const [page, setPage] = useState(1);
  const firstLoad = useRef(false);

  const OFFSET = 2;

  useEffect(() => {
    //setIsLoading(true);
    fetchData(page);
    firstLoad.current = true;
  }, [page]);

  const fetchData = async (page) => {
    if (!page) return;

    try {
      firstLoad.current = false;
      const data = await dbUtils.readDataOffset(
        page.toString(),
        OFFSET,
        (data) => console.log('db load success', data),
        (error) => console.log('error', error)
      );

      if (data && data.length > 0) {
        setDataList([...dataList, ...data]);
        console.log(dataList);
      }
      if (data.length > 0 && data[data.length - 1].id === 1) {
        hasMoreData.current = false;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      //setIsLoading(false);
    }
  };

  //if (isLoading) {
  if (false) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator
          size="large"
          color={styles.activityContainer.color}
        />
      </View>
    );
  }

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
    //if (!isLoading && hasMoreData.current) {
    if (hasMoreData.current) {
      setPage(page + 1);
      //setIsLoading(true);
      fetchData(page.current);
    }
  };

  const hasData = dataList.length > 0;

  const renderFooter = () => {
    //if (!isLoading && hasMoreData.current && dataList.current.length > 0) {
    if (hasMoreData.current && dataList.length > 0) {
      return (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleLoadMore}>
            <Text style={styles.buttonText}>
              {false ? 'Carregando' : 'Carregar mais'}
            </Text>
          </Pressable>
        </View>
      );
    }
    //if (isLoading) return <ActivityIndicator />;
    if (false) return <ActivityIndicator />;
  };

  const scrollHandler = () => {
    if (firstLoad.current && dataList.length > 0) {
      return;
    }
    flatListRef.current.scrollToEnd();
  };

  return (
    <View>
      {hasData && (
        <FlatList
          ref={flatListRef}
          onContentSizeChange={scrollHandler}
          data={dataList}
          renderItem={({ item }) => <HistoryItem data={item} />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderFooter}
          style={styles.listContainer}
        />
      )}
    </View>
  );
};
