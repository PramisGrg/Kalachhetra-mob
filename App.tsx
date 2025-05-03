import React from 'react';
import BottomTabNavigator from './src/navigations/bottom-tab-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomTabNavigator />;
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
