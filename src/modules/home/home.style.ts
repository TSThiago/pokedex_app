import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    home:{
        height: '100%',
        width: '100%'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 32,
        fontFamily: 'Roboto-Bold',
        color: 'black',
    },
    button: {
        padding: 15,
        paddingHorizontal: 70,
        backgroundColor: '#fff',
        marginBottom: 8,
    },
    buttonText: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold'
    }
})