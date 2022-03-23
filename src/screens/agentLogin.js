import { View, Text,Image } from 'react-native'
import React from 'react'
import Btn from '../utils/button'
import Input from '../utils/input'
const st=require( "../styles/loginst.js")

export default function Agentlogin() {
  return (
    <View>
    <Image
      style={st.logo} 
      source={require("../../assets/image/logo.png")} />
      <Text>Agentlogin</Text>
      <Input name="Agent ID"/>
      <Input name="Password"/>
      <Btn 
        title="login" />
    </View>
  )
}
