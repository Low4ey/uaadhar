import { Text, StyleSheet, View , Image} from 'react-native'
import React, { Component } from 'react'
const st=require( "../styles/loginst.js")

export default function Login(){
    return (
      <View>
      <Image
      style={st.logo} 
      source={require("../../assets/image/logo.png")} />
        <Text>login</Text>
      </View>
    )
  }


const styles = StyleSheet.create({})