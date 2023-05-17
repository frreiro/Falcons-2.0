import React from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './styles';
import {GlobalStyles} from '@globalStyle/GlobalStyles';

export default function CustomSwiper({
  children: slides,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        activeDotColor={GlobalStyles.colors.secondary}>
        {slides}
      </Swiper>
    </View>
  );
}
