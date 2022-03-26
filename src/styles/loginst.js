import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({

    backgoundImage:{
        height: '100%' ,
        width: '100%' ,
    },
    
    body: {
        height: '80%',
    },

    logo: {
        marginTop: 50,
        alignSelf: 'center',
        height: 140,
        width: 200,
        marginBottom:10,
        
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },

    BtnPlace: {
        position:'relative',
        bottom: 350,
        padding: 80,
    },

    textbox1: {
        backgroundColor:'#F0FFFF',
        borderRadius: 2,
        borderColor:'#000000',
        padding: 5,
        margin: 5,
    },

    textbox2: {
        marginTop: 10,
        padding: 5,
        backgroundColor:'#F0FFFF',
        margin: 5,
    },

    BtnGrping: {
        marginBottom: 40,
    },

    BtnPlace2:{

    }
});