import React, {useRef} from 'react';
import {TouchableWithoutFeedback, View, Animated} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FloatingItem from '@components/FloatingItem';

export default function FloatingButton() {
  const isOpen = useRef(false);

  const animate = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = isOpen.current ? 0 : 1;

    Animated.spring(animate, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    isOpen.current = !isOpen.current;
  };

  return (
    <View style={[styles.container, styles.position]}>
      <FloatingItem animate={animate} primitivePosition={2} />
      <FloatingItem animate={animate} primitivePosition={1} />

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu]}>
          <Icon name="account-group" size={25} color={'#FFF'} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
