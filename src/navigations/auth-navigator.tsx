import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={Login} />
      <AuthStack.Screen name="RegisterScreen" component={Register} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
