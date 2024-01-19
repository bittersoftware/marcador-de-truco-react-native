import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import dbUtils from '../src/database/database';
import { PageTitle } from '../src/components/PageTitle';
import { HistoryList } from '../src/components/HistoryList';
import styles from '../styles/historyStyle';

export default function History() {
  const [isLoading, setIsLoading] = useState(false);
  const dataList = useRef([]);
  const hasMoreData = useRef(true);
  const page = useRef(1);
  const firstLoad = useRef(false);

  const OFFSET = 8;

  useEffect(() => {
    setIsLoading(true);
    fetchData(page.current);
    firstLoad.current = true;
  }, []);

  const fetchData = async (page) => {
    try {
      firstLoad.current = false;
      const data = await dbUtils.readDataOffset(
        page.toString(),
        OFFSET,
        () => console.log('success', data),
        (error) => console.log('error', error)
      );

      if (data && data.length > 0) {
        dataList.current = [...dataList.current, ...data];
      }
      if (data[data.length - 1].id === 1) {
        hasMoreData.current = false;
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
      page.current = page.current + 1;
      setIsLoading(true);
      fetchData(page.current);
    }
  };

  return (
    <View style={styles.container}>
      <PageTitle text={'Histórico'} />
      <HistoryList
        handleLoadMore={handleLoadMore}
        dataList={dataList}
        hasMoreData={hasMoreData}
        isLoading={isLoading}
        firstLoad={firstLoad}
      />
    </View>
  );
}
