import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export interface ICard {
  _id?: number;
  title: string;
}

export default function Card(props: ICard): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
}
