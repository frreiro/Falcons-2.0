import React, {useRef} from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FloatingItem from '@components/FloatingItem';
import {GlobalStyles} from '@globalStyle/GlobalStyles';

const items = [
  {
    id: 0,
    iconName: 'feather',
  },
  {
    id: 1,
    iconName: 'engine',
  },
  {
    id: 2,
    iconName: 'flash',
  },
  {
    id: 3,
    iconName: 'tire',
  },
  {
    id: 4,
    iconName: 'vector-triangle',
  },
  {
    id: 5,
    iconName: 'abacus',
  },
];

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

  const menuAnimationStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
    transform: [
      {
        scale: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.1],
        }),
      },
    ],
  };
  return (
    <View style={[styles.container, styles.position]}>
      {items.map((item, index) => {
        return (
          <FloatingItem
            key={item.id}
            animate={animate}
            primitivePosition={index + 1}
            iconName={item.iconName}
          />
        );
      })}

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, menuAnimationStyle]}>
          <Icon
            name="account-group"
            size={25}
            color={GlobalStyles.colors.primary}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
