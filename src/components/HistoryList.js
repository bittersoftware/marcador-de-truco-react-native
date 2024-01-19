import { useRef } from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import { HistoryItem } from './HistoryItem';
import { ActivityIndicator } from 'react-native-web';

export const HistoryList = ({
  handleLoadMore,
  dataList,
  hasMoreData,
  isLoading
}) => {
  const flatList = useRef(null);

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

  return (
    <FlatList
      ref={flatList}
      onContentSizeChange={() => flatList.current.scrollToEnd()}
      data={dataList}
      renderItem={({ item }) => <HistoryItem data={item} />}
      keyExtractor={(item) => item.id}
      ListFooterComponent={renderFooter}
    />
  );
};
