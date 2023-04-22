import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Text, View} from 'react-native';
import {styles} from './styles';

export default function Documents() {
  return (
    <MainLayout title="DOCUMENTOS">
      <View style={styles.container}>
        <Text>Documents aqui</Text>
      </View>
    </MainLayout>
  );
}
