import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Login_nav2 from './src/Navigation/login_nav';

const App=()=> {
  return (
    <NavigationContainer>
    <Login_nav2 />
    </NavigationContainer>
  );
}
export default App;
