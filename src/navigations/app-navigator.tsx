import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/main/search';
import BottomTabNavigator from './bottom-tab-navigator';

const AppStack = createStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="BottomTabs" component={BottomTabNavigator} />
      <AppStack.Screen name="SearchScreen" component={Search} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
