import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Footer from '../../components/footer';
import Header from '../../components/header';
import {styles} from './styles';

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Header />
      {children}
      <Footer />
    </SafeAreaView>
  );
}
