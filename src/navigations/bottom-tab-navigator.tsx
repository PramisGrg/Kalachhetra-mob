import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/home/explore/index';
import Profile from '../screens/home/profile/index';
import Message from '../screens/home/message';
import Order from '../screens/home/order';
import Notification from '../screens/home/notification';
import {Bell, Mail, Search, ShoppingCart, User} from 'lucide-react-native';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case 'Explore':
              return <Search color={color} size={size} />;
            case 'Message':
              return <Mail color={color} size={size} />;
            case 'Order':
              return <ShoppingCart color={color} size={size} />;
            case 'Notification':
              return <Bell color={color} size={size} />;
            case 'Profile':
              return <User color={color} size={size} />;
            default:
              return null;
          }
        },
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.border,
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
