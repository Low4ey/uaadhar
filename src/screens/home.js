import { View, Text } from 'react-native'
import React from 'react'
import Info from '../utils/info'
import Btn from '../utils/button'

export default function Home() {
  return (
    <View><View>
      <Text> Name : {Info.peron1.name}</Text>
      <Text> Fathers Name : {Info.peron1.Fathers_name}</Text>
      <Text> Date Of Birth : {(Info.peron1.DOB).toDateString()}</Text>
      <Text> Address : {Info.peron1.Add}</Text>
    </View>
      <View>
        <Text>Booked Slots</Text>
        <View>
          <Text>No Results</Text>
        </View>
        <Btn title="Update Demographic Data "/>
      </View>
    </View>
  )
}