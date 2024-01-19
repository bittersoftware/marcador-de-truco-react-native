import { useRef } from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import HistoryItem from './HistoryItem';
import { ActivityIndicator } from 'react-native';

export const HistoryList = ({
  handleLoadMore,
  dataList,
  hasMoreData,
  isLoading,
  firstLoad
}) => {
  const flatListRef = useRef(null);

  const renderFooter = () => {
    if (!isLoading && hasMoreData) {
      return (
        <TouchableOpacity
          style={{ backgroundColor: 'pink', padding: 6 }}
          onPress={handleLoadMore}
        >
          <Text>{isLoading ? 'Carregando' : 'Carregar mais'}</Text>
        </TouchableOpacity>
      );
    }
    if (isLoading) return <ActivityIndicator />;
  };

  const scrollToIndex = (index) => {
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: index
    });
  };

  const scrollHandle = () => {
    if (firstLoad.current && dataList.length > 0) {
      scrollToIndex(0);
      return
    }
    flatListRef.current.scrollToEnd();
  };

  return (
    <FlatList
      ref={flatListRef}
      onContentSizeChange={scrollHandle}
      data={dataList}
      renderItem={({ item }) => <HistoryItem data={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={renderFooter}
    />
  );
};
