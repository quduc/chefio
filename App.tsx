/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { RootStack } from 'routes/RootStack';


const App = () => {
  return (
    <>
      <RootStack />
      <StatusBar barStyle={'light-content'} />
    </>
  )
};



export default App;
