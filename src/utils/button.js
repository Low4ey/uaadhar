import { Text, Button, View } from 'react-native'

const Btn = (props) => {
    return (
        <View>
            <Button
                onPress={props.click}
                title={props.title}
                color="#841584"
            />

        </View>
    )
}

export default Btn;