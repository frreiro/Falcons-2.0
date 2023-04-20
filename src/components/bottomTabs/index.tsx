import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import TabIconItem from './tabIconItem';
import {GlobalStyles} from '../../../styles/GlobalStyles';
import RA from '../../pages/RA';
import Documents from '../../pages/Documents';

const Tab = createBottomTabNavigator();

type TabInfoType = {
  id: number;
  name: string;
  focusedIcon: string;
  unfocusedIcon: string;
  component: () => JSX.Element;
};

export default function BottomTabs() {
  const tabsInfo: TabInfoType[] = [
    {
      id: 0,
      name: 'RA',
      focusedIcon: 'cube',
      unfocusedIcon: 'cube-outline',
      component: RA,
    },
    {
      id: 1,
      name: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
      component: Home,
    },
    {
      id: 2,
      name: 'Docs',
      focusedIcon: 'document',
      unfocusedIcon: 'document-outline',
      component: Documents,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GlobalStyles.colors.primaryColor,
        tabBarInactiveTintColor: GlobalStyles.colors.primaryColor,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: GlobalStyles.colors.secondaryColor},
      }}>
      {tabsInfo.map(tab => {
        return (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({color, focused, size}) => (
                <TabIconItem
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
  );
}
