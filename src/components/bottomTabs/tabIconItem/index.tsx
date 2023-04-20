import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export type TabIconItemProps = {
  focusedIconName: string;
  unfocusedIconName: string;
  color: string;
  size: number;
  focused: boolean;
};

export default function TabIconItem({
  focusedIconName,
  unfocusedIconName,
  color,
  size,
  focused,
}: TabIconItemProps) {
  return focused ? (
    <Icon name={focusedIconName} color={color} size={size} />
  ) : (
    <Icon name={unfocusedIconName} color={color} size={size} />
  );
}
