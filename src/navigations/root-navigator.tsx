import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';
import {useState} from 'react';

const RootStack = createStackNavigator();

function RootNavigator() {
  const [isLoggedIn, seIsLoggedIn] = useState(true);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  console.log(MyTheme, 'This is my theme');

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <RootStack.Screen name="App" component={AppNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
