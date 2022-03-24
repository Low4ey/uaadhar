import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/home.js"

const stack=createStackNavigator();

export default function Home_nav() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home}/>
    </stack.Navigator>
  );
}

