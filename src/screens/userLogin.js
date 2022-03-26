import { Text, StyleSheet, View, Image, Alert, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Btn from '../utils/button.js'
import Input from '../utils/input.js'
const st = require("../styles/loginst.js")
const st1 = require("../styles/buttonst.js")


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
<<<<<<< Updated upstream
    <View>
      <Image
        style={st.logo}
        source={require("../../assets/image/logo.png")} />
      <Text>User Login</Text>
      <Input
        name="Aadhar No"
        changeFn={(val) => setData(val)}
      />
      {isAadhar ? <Input
        name="OTP"
        changeFn={(val) => setData(val)}
      /> :
      <Btn
        title={"Get OTP"}
        click={onClick} />}
      <Btn
        title={"Login"}
        click={onClick2} />
    </View>
=======
    <ImageBackground
      style={st.backgoundImage}
      source={require("../../assets/background.jpg")} >
      <View style={st.body}>
      <View style={st.shadow}>
          <Image
            style={st.logo}
            source={require("../../assets/image/logo.png")} />
      </View>
      </View>
      <View style={st.BtnPlace}>
      <View style={st.BtnGrping}>
          <View style={st.textbox1}>
            <Input 
            name="Aadhar No"
            changeFn={(val) => setData(val)} />
          </View>
          <View >
            {isAadhar ? 
            <Input 
              name="OTP"
              changeFn={(val) => setData(val)} /> :
              <Btn
                title={"Get OTP"}
                click={onClick} />}
          </View>
          </View>
          <Btn
            title={"Login"}
            click={onClick2} />
      </View>
      </ImageBackground>
>>>>>>> Stashed changes
  )
}