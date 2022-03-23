import { Text, StyleSheet, View , Image,Alert} from 'react-native'
import React, { useState } from 'react'
import Btn from '../utils/button.js'
import Input from '../utils/input.js'
const st=require( "../styles/loginst.js")

export default function Login(){
  const [isAadhar,setAadhar]=useState(false)
  const [btn,setBtn]=useState("Get OTP")
  const [data,setData]=useState("")
  const onClick=()=>{
    if(data.length<12){
      Alert.alert("Please Enter Valid Aadhar Number")
    }
    else{
      setAadhar(true)
      setBtn("Login")
    }
  }
    return (
      <View>
      <Image
      style={st.logo} 
      source={require("../../assets/image/logo.png")} />
        <Text>login</Text>
        <Input 
        name="Aadhar No"
          changeFn={(val)=>setData(val)}
        />
        {isAadhar? <Input 
        name="OTP"
          changeFn={(val)=>setData(val)}
        />:null }
        <Btn 
        title={btn}
        click={onClick} />
      </View>
    )
  }


const styles = StyleSheet.create({})