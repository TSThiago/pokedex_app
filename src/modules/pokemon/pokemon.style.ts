import { StyleSheet } from "react-native";

export const pokemonStyles = StyleSheet.create({
    pokemonContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#71CDB1'
    },
    pokemonHeader: {
        height: "20%",
        width: '80%',
        paddingTop: 20
    },
    pokemonName: {
        fontSize: 40,
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
    },
    pokemonTypes: {
        marginTop: 10,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    type: {
        fontFamily: 'Roboto-Medium',
        color: '#fff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        backgroundColor: '#84DECA',
        
    },
    pokemonNumber: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        position: 'absolute',
        right: 10,
        top: 60
    },
    imageContainer: {
        position: 'absolute',
        top: 100,
        zIndex: 1,
    },
    pokemonImage: {
        width: 250,
        height: 250
    },
    detailsContainer: {
        marginTop: 'auto',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: '60%',
        width:'100%',
        backgroundColor: '#fff',
    },
    detailsHeader: {
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop: 45,
        padding: 20,
        width: '100%',
    },
    detailTitle: {
        marginTop: 10,
        padding: 10,
        paddingBottom: 20,
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        borderBottomWidth: 1,
    }
})