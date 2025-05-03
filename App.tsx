import React from 'react';
import BottomTabNavigator from './src/navigations/bottom-tab-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottomTabNavigator />;
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
