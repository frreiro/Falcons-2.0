import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export type CardType = {
  name: string;
  url: string;
};

export default function Car(props: CardType) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.url,
        }}
        style={styles.car}
      />
      <Text style={styles.car_text}>{props.name}</Text>
    </View>
  );
}
