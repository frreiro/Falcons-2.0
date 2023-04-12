import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './components/tab';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

export default App;
