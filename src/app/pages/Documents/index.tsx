import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';

import Card from '@components/Card';
import MainLayout from '@layouts/MainLayout';

export default function Documents() {
  return (
    <MainLayout title="DOCUMENTOS">
      <View style={styles.container}>
        <Text>Documents aqui</Text>
        <FlatList
          data={[
            {
              id: 0,
              title: 'Manual de Montagem',
            },
            {
              id: 1,
              title: 'Manual de Ferramentas',
            },
          ]}
          renderItem={({item}) => <Card title={item.title} />}
        />
      </View>
    </MainLayout>
  );
}
