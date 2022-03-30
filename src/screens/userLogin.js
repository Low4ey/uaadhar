import { Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Btn from '../utils/button.js'
import Input from '../utils/input.js'

const st = require("../styles/loginst.js")

export default function Login({ navigation }) {
  const [isAadhar, setAadhar] = useState(false)
  const [data, setData] = useState("")
  const sign=()=>{
    navigation.navigate("Sign Up")
  }
  const onClick = () => {
    // if (data.length < 2) {
    //   Alert.alert("Invalid OTP : Please Try Again")
    // }
    // else {
    //   setBtn(true)
    navigation.navigate("Home")
    // }
  }
  return (
    <View style={st.body}>
      <View >
        <Image
          style={st.logo}
          source={require("../../assets/image/logo.png")} />
      </View>
      <View style={st.BtnPlace}>
        <View style={st.textbox1}>
          <Input
            name="UserName"
            len={12}
            changeFn={(val) => setData(val)} />
        </View>
        <View style={st.textbox1}>
          <Input
            name="Password"
            len={6}
            changeFn={(val) => setData(val)} />
        </View>
        <View style={st.Btnlogin}>
          <Btn
            title={"Login"}
            click={onClick} />
        </View>
        <View>
          <Text>Don't have Account?</Text>
          <TouchableOpacity
            onPress={sign}
          >
            <Text style={st.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}