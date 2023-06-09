import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MainLayout from '@layouts/MainLayout';
import FloatingButton from '@components/FloatingButton';
import {
  subMenuItemsParts,
  subMenuItemsSector,
} from '@components/FloatingButton/data';

export default function RA() {
  return (
    <MainLayout title="PEÇAS">
      <View style={styles.container}>
        <FloatingButton
          submenuItems={subMenuItemsSector}
          menuIcon={'account-group'}
          style={{bottom: 90, right: 50}}
        />
        <FloatingButton
          submenuItems={subMenuItemsParts}
          menuIcon={'cube-scan'}
          style={{bottom: 90, left: 50}}
        />
      </View>
    </MainLayout>
  );
}
