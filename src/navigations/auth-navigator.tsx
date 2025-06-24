import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Onbaroding from '../screens/auth/onbaording';
import {AuthNavigationType} from '../types/navigation.types';

const AuthStack = createStackNavigator<AuthNavigationType>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="OnboardingScreen" component={Onbaroding} />
      <AuthStack.Screen name="LoginScreen" component={Login} />
      <AuthStack.Screen name="RegisterScreen" component={Register} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
