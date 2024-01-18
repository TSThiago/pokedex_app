import { View, Text, SafeAreaView, ImageBackground } from "react-native"
import getPokemonDetails from "../../services/api/getPokemonDetails";
import { backgroundImage } from "../../shared/backgroundImage/backgroundImage";
import { styles } from "../../styles/global.style";
import { pokemonStyles } from "./pokemon.style";

const Pokemon = ({ route }) => {

    // const pokemonDetails = getPokemonDetails(route.params.pokemonName)
    // console.log(pokemonDetails)

    // const pokemonDetails = getPokemonDetails(pokemonId)

    return (
        <SafeAreaView style={styles.container}>

            <View style={pokemonStyles.pokemonContainer}>
                <View style={pokemonStyles.pokemonHeader}>
                    <Text style={pokemonStyles.pokemonName}>{route.params.pokemonName}</Text>
                    <View style={pokemonStyles.pokemonTypes}>
                        <Text style={pokemonStyles.type}>Grass</Text>
                        <Text style={pokemonStyles.type}>Poison</Text>
                    </View>
                    <Text style={pokemonStyles.pokemonNumber}>#1</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Pokemon;