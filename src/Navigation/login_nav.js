
import 'react-native-gesture-handler';
import Login from '../screens/userLogin';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Agentlogin from '../screens/agentLogin';
const Tab = createMaterialTopTabNavigator();

export default function Login_nav() {
  return (
     <Tab.Navigator>
      <Tab.Screen name="User Login" component={Login} />
      <Tab.Screen name="Agent Login" component={Agentlogin} />
    </Tab.Navigator>
  );
}