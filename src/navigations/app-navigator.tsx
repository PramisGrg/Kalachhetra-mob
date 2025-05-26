import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/main/search';
import BottomTabNavigator from './bottom-tab-navigator';
import Onbaroding from '../screens/auth/onbaording';

const AppStack = createStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="BottomTabs" component={BottomTabNavigator} />
      <AppStack.Screen name="SearchScreen" component={Search} />
      <AppStack.Screen name="OnboardingScreen" component={Onbaroding} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
