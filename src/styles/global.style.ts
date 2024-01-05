import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 32,
        fontFamily: 'Roboto-Bold',
        color: 'black'
    },
    pokemonList: {
        height: '100%',
        width: '90%',
        backgroundColor: '#F6F8FC',
    },

    pokemon: {
        width: '100%',
        height: 200,
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#49D0B0',
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
        padding: 8,
        color: 'black',
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
    },
    type: {
        margin: 4,
        fontSize: 16,
        backgroundColor: '#61E1CA',
        color: 'black',
        fontFamily: 'Roboto-Medium',
        padding: 4,
        borderRadius: 16
    }
});