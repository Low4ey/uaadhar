import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../screens/home.js"
import Login from '../screens/userLogin.js';
import Agent_home from "../screens/agent_home"
import Agentlogin from "../screens/agentLogin"
const stack=createStackNavigator()

const Login_nav=()=>{
    return(
    <stack.Navigator>
    <stack.Screen name="User Login" component={Login} />
    <stack.Screen name="Home" component={Home}/>
  </stack.Navigator>)
}
const Agent_nav=()=>{
    return(
    <stack.Navigator>
    <stack.Screen name="Agent Login" component={Agentlogin} />
    <stack.Screen name="Agent Dashboard" component={Agent_home}/>
  </stack.Navigator>)
}

export {Login_nav , Agent_nav}