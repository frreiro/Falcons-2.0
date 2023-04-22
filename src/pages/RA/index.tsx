import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Text, View} from 'react-native';
import {styles} from './styles';

export default function RA() {
  return (
    <MainLayout title="PEÇAS">
      <View style={styles.container}>
        <Text>RA aqui</Text>
      </View>
    </MainLayout>
  );
}
