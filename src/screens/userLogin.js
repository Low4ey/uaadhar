import { Text, StyleSheet, View , Image} from 'react-native'
import React, { useState } from 'react'
import Btn from '../utils/button.js'
import Input from '../utils/input.js'
const st=require( "../styles/loginst.js")

export default function Login(){
  const [isAadhar,setAadhar]=useState(false)
  const [btn,setBtn]=useState("Get OTP")
  const onClick=()=>{
    
  }
    return (
      <View>
      <Image
      style={st.logo} 
      source={require("../../assets/image/logo.png")} />
        <Text>login</Text>
        <Input name="Aadhar No"/>
        <Btn 
        title={btn} />
      </View>
    )
  }


const styles = StyleSheet.create({})