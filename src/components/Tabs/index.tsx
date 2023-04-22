import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabIconItem from '../TabIconItem';
import {GlobalStyles} from '../../styles/GlobalStyles';
import {NavigationContainer} from '@react-navigation/native';
import {TabInfoType, tabItens} from './TabItem';

const Tab = createBottomTabNavigator();

export default function Tabs({
  TabItens = tabItens,
}: {
  TabItens?: TabInfoType[];
}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: GlobalStyles.colors.primary,
          tabBarInactiveTintColor: GlobalStyles.colors.primary,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: GlobalStyles.colors.secondary},
        }}>
        {TabItens.map(tab => {
          return (
            <Tab.Screen
              key={tab.id}
              name={tab.name}
              component={tab.component}
              options={{
                tabBarIcon: ({color, focused, size}) => (
                  <TabIconItem
                    id={tab.id}
                    size={size}
                    color={color}
                    focused={focused}
                    focusedIconName={tab.focusedIcon}
                    unfocusedIconName={tab.unfocusedIcon}
                  />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
