import { Text, StyleSheet, View, Image, Alert, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Btn from '../utils/button.js'
import Input from '../utils/input.js'
import { TextInput } from 'react-native-gesture-handler'

const st = require("../styles/loginst.js")
const st1 = require("../styles/buttonst.js")
const windowHeight = Dimensions.get('window').height;


export default function Login({navigation}) {
  const [btn, setBtn] = useState(false)
  const [isAadhar, setAadhar] = useState(false)
  const [data, setData] = useState("")
  const onClick = () => {
    if (data.length < 12) {
      Alert.alert("Please Enter Valid Aadhar Number")
    }
    else {
      setAadhar(true)
      setBtn("Login")
    }
  }
  const onClick2=()=>{
    if(data.length<6){
      Alert.alert("Invalid OTP : Please Try Again")
    }
    else{
      setBtn(true)
      navigation.navigate("Home")
    }
  }
  return (
    <ImageBackground
      style={st.backgoundImage}
      source={require("../../assets/background.jpg")} >
      <View style={st.body}>
          <Image 
            style={st.logo}
            source={require("../../assets/image/logo.png")} />
      </View>
      <View style={st.BtnPlace}>
          <View style={st.textbox1}>
            <Input
            name="Aadhar No"
            len={12}
            changeFn={(val) => setData(val)} />
          </View>
          <View style={isAadhar?st.textbox2:null}>
            {isAadhar ? 
            <Input 
              name="OTP"
              len={6}
              changeFn={(val) => setData(val)} /> :
              <Btn
                title={"Get OTP"}
                click={onClick} />}
          </View>
          <View style={st.Btnlogin}>
          <Btn
            title={"Login"}
            click={onClick2} />
            </View>
      </View>
      </ImageBackground>
  )
}