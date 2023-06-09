import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MainLayout from '@layouts/MainLayout';
import FloatingButton from '@components/FloatingButton';

export default function RA() {
  return (
    <MainLayout title="PEÇAS">
      <View style={styles.container}>
        <FloatingButton />
      </View>
    </MainLayout>
  );
}
