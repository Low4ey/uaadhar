import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/home.js"
import Login_nav from './src/Navigation/login_nav';

const Tab = createMaterialTopTabNavigator();
const stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Login_nav />
    {/* <stack.Navigator>
      <stack.Screen name="Home" component={Home}/>
    </stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
