import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './components/bottomTabs';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
