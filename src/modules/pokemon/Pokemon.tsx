import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native"
import { styles } from "../../styles/global.style";
import { pokemonStyles } from "./pokemon.style";
import Api from "../../services/api/api";
import { useEffect, useState } from "react";
import About from "./details/about/About";
import BaseStats from "./details/baseStats/BaseStats";
import { backgroundImage } from "../../shared/backgroundImage/backgroundImage";


const Pokemon = ({ route }) => {
    const [pokemonDetails, setPokemonDetails] = useState();
    const [isAbout, setAbout] = useState<boolean>(true);
    const [isBaseStats, setBaseStats] = useState<boolean>(false);
    const [isEvolution, setEvolution] = useState<boolean>(false);
    const [isMoves, setMoves] = useState<boolean>(false);

    const handleDetails = (detailName: string) => {
        if (detailName === 'about') {
            setAbout(true);
            setBaseStats(false);
            setEvolution(false)
            setMoves(false)
        } else if (detailName === 'baseStats') {
            setAbout(false);
            setBaseStats(true);
            setEvolution(false)
            setMoves(false)
        } else if (detailName === 'evolution') {
            setAbout(false);
            setBaseStats(false);
            setEvolution(true)
            setMoves(false)
        } else if (detailName === 'moves') {
            setAbout(false);
            setBaseStats(false);
            setEvolution(false)
            setMoves(true)
        }
    };

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
        console.log(pokemonDetails)
    }, [])

    if (pokemonDetails === undefined) {
        return (
            <View>
                <Text>null</Text>
            </View>
        )
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
                    <View style={pokemonStyles.pokemonContainer}>
                        <View style={pokemonStyles.pokemonHeader}>
                            <Text style={pokemonStyles.pokemonName}>{pokemonDetails.name}</Text>
                            <View style={pokemonStyles.pokemonTypes}>
                                {pokemonDetails.types.map((typeSlot) => {
                                    return (
                                        <Text style={pokemonStyles.type}>{typeSlot.type.name}</Text>
                                    )
                                })}
                            </View>
                            <Text style={pokemonStyles.pokemonNumber}>#{pokemonDetails.id}</Text>
                        </View>
                        <View style={pokemonStyles.imageContainer}>
                            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${route.params.pokemonNumber}.png` }} style={pokemonStyles.pokemonImage} />
                        </View>
                        <View style={pokemonStyles.detailsContainer}>
                            <View style={pokemonStyles.detailsHeader}>
                                <TouchableOpacity onPress={() => handleDetails('about')}>
                                    <Text style={pokemonStyles.detailTitle}>About</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDetails('baseStats')}>
                                    <Text style={pokemonStyles.detailTitle}>Base Stats</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDetails('evolution')}>
                                    <Text style={pokemonStyles.detailTitle}>Evolution</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDetails('moves')}>
                                    <Text style={pokemonStyles.detailTitle}>Moves</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={pokemonStyles.details}>
                                {isAbout ? (
                                    <About />
                                ) : (
                                    <View></View>
                                )}
                                {isBaseStats ? (
                                    <BaseStats />
                                ) : (
                                    <View></View>
                                )}
                                {isEvolution ? (
                                    <View><Text>Evolution</Text></View>
                                ) : (
                                    <View></View>
                                )}
                                {isMoves ? (
                                    <View><Text>Moves</Text></View>
                                ) : (
                                    <View></View>
                                )}
                            </ScrollView>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    };
}



export default Pokemon;