import React from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './styles';
import {GlobalStyles} from '@globalStyle/GlobalStyles';

export interface ICustomSwiper {
  children: React.ReactNode;
  setActualIndex: (index: number) => void;
}

export default function CustomSwiper({
  children: slides,
  setActualIndex,
}: ICustomSwiper) {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <Swiper
        onIndexChanged={index => setActualIndex(index)}
        loop={false}
        style={styles.wrapper}
        showsButtons={false}
        activeDotColor={GlobalStyles.colors.secondary}>
        {slides}
      </Swiper>
    </View>
  );
}
