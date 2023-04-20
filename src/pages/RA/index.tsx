import React from 'react';
import MainLayout from '../../layout/MainLayout';
import {Text, View} from 'react-native';
import {styles} from './styles';

export default function RA() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>RA aqui</Text>
      </View>
    </MainLayout>
  );
}
