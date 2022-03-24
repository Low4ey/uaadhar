import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Main_nav from './src/Navigation/login_nav';

const App=()=> {
  return (
    <NavigationContainer>
    <Main_nav/> 
    </NavigationContainer>
  );
}
export default App;
