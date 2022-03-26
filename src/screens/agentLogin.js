import { View, Text,Image, ImageBackground } from 'react-native'
import React from 'react'
import Btn from '../utils/button'
import Input from '../utils/input'
const st=require( "../styles/loginst.js")
const st1 = require("../styles/buttonst.js")



export default function Agentlogin({navigation}) {
  const onClick3=()=>{
    navigation.navigate("Agent Dashboard")
    }
  return (
    <ImageBackground
      style={st.backgoundImage}
      source={require("../../assets/background.jpg")} >

    <View style={st.body}>
      <Image style={st.logo} 
      source={require("../../assets/image/logo.png")} />
      <View style={st.BtnPlace2}>
      <View style={st.textbox1}>
      <Input name="Agent ID"/>
      </View>
      <View style={st.textbox2}>
      <Input name="Password"/>
      </View>
      <View style={st1.Btn}>
      <Btn 
      title={"Login"}
      click={onClick3}
       />
      </View>
      </View>
    </View>
    </ImageBackground>
  )
}
