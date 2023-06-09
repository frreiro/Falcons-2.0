import {styles} from '@components/FloatingButton/styles';
import React from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FloatingItem({
  animate,
  primitivePosition,
}: {
  animate: Animated.Value;
  primitivePosition: number;
}) {
  const subMenuAnimationStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
    transform: [
      {scale: animate},
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60 * primitivePosition],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback>
      <Animated.View
        style={[styles.button, styles.submenu, subMenuAnimationStyle]}>
        <Icon name="account-group" size={20} color={'#FFF'} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
