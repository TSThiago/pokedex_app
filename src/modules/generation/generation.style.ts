import { StyleSheet } from "react-native";

export const generationStyle = StyleSheet.create({
    home: {
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 32,
        fontFamily: 'Roboto-Bold',
        color: 'black',
    },
    pokemonList: {
        height: '100%',
        width: '90%',
    },

    pokemon: {
        marginLeft:'5%',
        width: '90%',
        height: 200,
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#F2F2F2',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pokemonNumber: {
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 8,
        fontFamily: 'Roboto-Medium',
        color: 'black',
        opacity: 0.3,

    },
    pokemonName: {
        textTransform: 'capitalize',
        padding: 8,
        color: 'black',
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    type: {
        textTransform: 'capitalize',
        margin: 4,
        fontSize: 16,
        backgroundColor: '#E9E9E9',
        color: 'black',
        fontFamily: 'Roboto-Medium',
        padding: 4,
        borderRadius: 16,
        textAlign: 'center',
        width: 100
    }
})