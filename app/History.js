import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import dbUtils from '../src/database/database';
import { PageTitle } from '../src/components/PageTitle';
import { HistoryList } from '../src/components/HistoryList';

export default function History() {
  const OFFSET = 2;
  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    console.log('useeffect page', page);
    setIsLoading(true);
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    try {
      const data = await dbUtils.readDataOffset(
        page,
        OFFSET,
        (data) => console.log('success', data),
        (error) => console.log('error', error)
      );

      if (data && data.length > 0) {
        setDataList((prevData) => prevData.concat(data));
      }
      if (data[data.length - 1].id === 1) {
        setHasMoreData(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
      setPage(page + 1);
      setIsLoading(true);
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
      <HistoryList
        handleLoadMore={handleLoadMore}
        dataList={dataList}
        hasMoreData={hasMoreData}
        isLoading={isLoading}
      />
    </View>
  );
}
