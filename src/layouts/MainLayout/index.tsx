import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Header from '../../components/Header';
import {styles} from './styles';

export default function MainLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Header title={title} />
      {children}
    </SafeAreaView>
  );
}
