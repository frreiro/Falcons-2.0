import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Car from './Car';

export default function Home() {
  return (
    <MainLayout title="FALCONS UFFÓRMULA">
      <View style={styles.container}>
        <Car />
        <Text>Main aqui</Text>
      </View>
    </MainLayout>
  );
}
