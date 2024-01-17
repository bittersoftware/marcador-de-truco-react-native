import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import dbUtils from '../src/database/database';
import { HistoryItem } from '../src/components/HistoryItem';
import { PageTitle } from '../src/components/PageTitle';

export default function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    dbUtils.readAllData(setData, console.log);

    setIsLoading(false);
  }, []);

  const showNames = () => {
    return data.map((match, index) => {
      return <HistoryItem key={index} data={match} />;
    });
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading Names</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1
      }}
    >
      <PageTitle text={'Histórico'} />
      {showNames()}
    </View>
  );
}
