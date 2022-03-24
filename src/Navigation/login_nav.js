
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Login_nav , Agent_nav} from "./custom_nav"
const Tab = createBottomTabNavigator();

export default function Login_nav2() {
  return (
     <Tab.Navigator>
      <Tab.Screen name="User Login" component={Login_nav} />
      <Tab.Screen name="Agent Login" component={Agent_nav} />
    </Tab.Navigator>
  );
}