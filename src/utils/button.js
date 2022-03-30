import { Button, View} from 'react-native'

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