import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Login_nav from './src/Navigation/login_nav';

const App=()=> {
  return (
    <NavigationContainer>
    <Login_nav/> 
    </NavigationContainer>
  );
}
export default App;
