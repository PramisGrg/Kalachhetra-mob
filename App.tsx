import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import BottomTabNavigator from './src/navigations/bottom-tab-navigator';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomTabNavigator />;
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
