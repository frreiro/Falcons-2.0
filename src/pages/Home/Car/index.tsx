import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export default function Car() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/c26d/c264/c2592359ccf984c93cf4478b44ab40c1?Expires=1682899200&Signature=mFlzd47vOb3iZRhVm6lfLJMC3oPOWZ2EaIlQIV7rDSlzissHfkxhIKeaV4BzlWaSfgBhXNdXltw~H8vDekXL5V2cicOlcrppCyrVY4bY9PZ5dU9raubzuLYmVs9fSVTJqyeBX7wTQsLbuHGu8KEJawhjaO8KShmHiPsgdjwwZxtNP3ScN8lzcMbifn2favbl39xbkV0EeA8Q97MptAZT-kiPRxg0~yeYR1wELgM3fFx5TP39xwA48X8m5Yp5hL8QAZWmzRSDLb42aBrIiNEDhh2cqFCeRiMqOKUoFAGo0fHGG5pbmmdUcW0Ju6qultjAxh0I5Wiftuqm1Mwm8ICHQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        }}
        style={styles.car}
      />
      <Text style={styles.car_text}>Protótipo 2023</Text>
    </View>
  );
}
