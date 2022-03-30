import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/userLogin.js';
import Signup from "../screens/agentLogin"
import Main_nav from './custom_nav';
const stack=createStackNavigator()
export default function Login_nav() {
  return (
    <stack.Navigator>
    <stack.Screen name="Main" component={Main_nav}/>
    <stack.Screen name="Sign Up" component={Signup} />
    <stack.Screen name="User Login" component={Login} />
    </stack.Navigator>
);
}
