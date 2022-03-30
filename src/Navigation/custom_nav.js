import React from 'react'
import Home from '../screens/home';
import Explore from '../screens/explore';
import  Message  from '../screens/Message';
import  Profile  from '../screens/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator()

function Main_nav(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Main_nav;