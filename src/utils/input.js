import { View, Text ,TextInput} from 'react-native'
import React from 'react'

export default function Input(props) {
  return (
    <View>
      <TextInput 
          placeholder={props.name}
          keyboardType={props.ktype}
          maxLength={props.len}
          onChangeText={props.changeFn}
          onChange={props.otp}
      />
    </View>
  )
}