import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/userLogin';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Agentlogin from './src/screens/agentLogin';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator>
      <Tab.Screen name="User Login" component={Login} />
      <Tab.Screen name="Agent Login" component={Agentlogin} />
    </Tab.Navigator>
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
