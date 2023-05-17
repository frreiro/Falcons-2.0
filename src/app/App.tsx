import Tabs from '@components/Tabs';
import ReduxProvider from '@providers/redux';
import React from 'react';

function App(): JSX.Element {
  return (
    <ReduxProvider>
      <Tabs />
    </ReduxProvider>
  );
}

export default App;
