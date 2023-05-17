import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';
import Header from '@components/Header';
import {GlobalStyles} from '@globalStyle/GlobalStyles';

export default function MainLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyles.colors.primary}
      />
      <Header title={title} />
      {children}
    </SafeAreaView>
  );
}
