import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/home/explore/index';
import Profile from '../screens/home/profile/index';
import Message from '../screens/home/message';
import Order from '../screens/home/order';
import Notification from '../screens/home/notification';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#ba4a03',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
