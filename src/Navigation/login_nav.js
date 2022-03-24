
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Login_nav , Agent_nav} from "./custom_nav"
const Tab = createMaterialTopTabNavigator();

export default function Main_nav() {
  return (
     <Tab.Navigator>
      <Tab.Screen name="User_Login" component={Login_nav} />
      <Tab.Screen name="Agent_Login" component={Agent_nav} />
    </Tab.Navigator>
  );
}