import { Text, Button, View, AppRegistry } from 'react-native'
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const st = require("../styles/buttonst.js")

const Btn = (props) => {
    return (
        <View style={st.Btn}>
            <Button
                color='#FF8C00'
                onPress={props.click}
                title={props.title}
            />

        </View>
    )
}

export default Btn;