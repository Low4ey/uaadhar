import { View,Image} from 'react-native'
import React from 'react'
import Btn from '../utils/button'
import Input from '../utils/input'
const st=require( "../styles/loginst.js")
const st1 = require("../styles/buttonst.js")



export default function Signup({navigation}) {
  const onClick3=()=>{
    navigation.navigate("User Login")
    }
  return (
    <View style={st.body}>
      <Image style={st.logo} 
      source={require("../../assets/image/logo.png")} />
      <View style={st.BtnPlace2}>
      <View style={st.textbox1}>
      <Input name="College Email ID"/>
      </View>
      <View style={st.textbox1}>
      <Input name="Password"/>
      </View>
      <View style={st.Btn}>
      <Btn 
      title={"Sign Up"}
      click={onClick3}
       />
      </View>
      </View>
    </View>
  )
}
