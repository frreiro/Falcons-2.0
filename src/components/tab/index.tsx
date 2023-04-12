import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="RA" component={Home} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Docs" component={Home} />
    </Tab.Navigator>
  );
}
