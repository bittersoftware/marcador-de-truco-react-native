import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import dbUtils from '../src/database/database';
import { HistoryItem } from '../src/components/HistoryItem';
import { PageTitle } from '../src/components/PageTitle';

export default function History() {
  const OFFSET = 3;
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await dbUtils.readDataOffset(
          page,
          OFFSET,
          (data) => console.log('success', data),
          (error) => console.log('error', error)
        );

        if (data && data.length > 0) {
          setDataList((prevData) => [...prevData, ...data]);
        } else {
          setHasMoreData(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading Names</Text>
      </View>
    );
  }

  if (dataList.length === 0) {
    return (
      <View>
        <Text>No data</Text>
      </View>
    );
  }

  const handleLoadMore = () => {
    if (!isLoading && hasMoreData) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1
      }}
    >
      <PageTitle text={'Histórico'} />
      <FlatList
        data={dataList}
        renderItem={({ item }) => <HistoryItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={{ backgroundColor: 'pink', padding: 6 }}
            onPress={handleLoadMore}
          >
            <Text>
              {isLoading ? 'Carregando' : hasMoreData ? 'Carregar mais' : 'Fim'}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
