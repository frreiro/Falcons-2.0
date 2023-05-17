import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import MainLayout from '@layouts/MainLayout';

export default function RA() {
  return (
    <MainLayout title="PEÇAS">
      <View style={styles.container}>
        <Text>RA aqui</Text>
      </View>
    </MainLayout>
  );
}
