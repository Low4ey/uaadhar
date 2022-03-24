import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../screens/home.js"
import Login from '../screens/userLogin.js';
import Agent_login from "../screens/agent_home"
 const stack=createStackNavigator()

const Login_nav=()=>{
    return(
    <stack.Navigator>
    <stack.Screen name="Login" component={Login} />
    <stack.Screen name="Home" component={Home}/>
  </stack.Navigator>)
}
const Agent_nav=()=>{
    return(
    <stack.Navigator>
    <stack.Screen name="Agwnt Login" component={Login} />
    <stack.Screen name="Home" component={Agent_login}/>
  </stack.Navigator>)
}

export {Login_nav , Agent_nav}