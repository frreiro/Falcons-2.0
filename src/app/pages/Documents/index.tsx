import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';

import {useAppSelector} from '@redux/hooks';
import Card from '@components/Card';
import MainLayout from '@layouts/MainLayout';

export default function Documents() {
  const documents = useAppSelector(state => state.data.documents);

  return (
    <MainLayout title="DOCUMENTOS">
      <View style={styles.container}>
        <Text>Documents aqui</Text>
        <FlatList
          data={documents}
          renderItem={({item}) => <Card title={item.title} />}
        />
      </View>
    </MainLayout>
  );
}
