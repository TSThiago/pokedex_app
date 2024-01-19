import { View, Text, SafeAreaView, Image, Button, TouchableOpacity } from "react-native"
import { styles } from "../../styles/global.style";
import { pokemonStyles } from "./pokemon.style";
import Api from "../../services/api/api";
import { useEffect, useState } from "react";

const Pokemon = ({ route }) => {
    const [pokemonDetails, setPokemonDetails] = useState();

    const getPokemonDetails = async () => {
        const response = (await Api.get(`pokemon/${route.params.pokemonNumber}`));
        if (response === undefined) {
            return undefined
        } else {
            setPokemonDetails(response.data)
        }

    };

    useEffect(() => {
        getPokemonDetails()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={pokemonStyles.pokemonContainer}>
                <View style={pokemonStyles.pokemonHeader}>
                    <Text style={pokemonStyles.pokemonName}>{route.params.pokemonName}</Text>
                    <View style={pokemonStyles.pokemonTypes}>
                        <Text style={pokemonStyles.type}>Grass</Text>
                        <Text style={pokemonStyles.type}>Poison</Text>
                    </View>
                    <Text style={pokemonStyles.pokemonNumber}>#{route.params.pokemonNumber}</Text>
                </View>
                <View style={pokemonStyles.imageContainer}>
                    <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${route.params.pokemonNumber}.png` }} style={pokemonStyles.pokemonImage} />
                </View>
                <View style={pokemonStyles.detailsContainer}>
                    <View style={pokemonStyles.detailsHeader}>
                        <Text style={pokemonStyles.detailTitle}>About</Text>
                        <Text style={pokemonStyles.detailTitle}>Base Stats</Text>
                        <Text style={pokemonStyles.detailTitle}>Evolution</Text>
                        <Text style={pokemonStyles.detailTitle}>Moves</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Pokemon;