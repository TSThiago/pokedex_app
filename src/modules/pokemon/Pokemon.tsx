import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native"
import { styles } from "../../styles/global.style";
import { pokemonStyles } from "./pokemon.style";
import Api from "../../services/api/api";
import { useEffect, useState } from "react";
import { backgroundImage } from "../../shared/backgroundImage/backgroundImage";
import { aboutStyle } from "./details/about/about.style";
import { baseStatsStyle } from "./details/baseStats/baseStats.style";
import { pokemonTypeColor } from "../../shared/colors/colors";


const Pokemon = ({ route }) => {
    const [pokemonDetails, setPokemonDetails] = useState();
    const [isAbout, setAbout] = useState<boolean>(true);
    const [isBaseStats, setBaseStats] = useState<boolean>(false);
    const [pokemonAbilities, setPokemonAbilities] = useState<string[]>([]);

    const handleDetails = (detailName: string) => {
        if (detailName === 'about') {
            setAbout(true);
            setBaseStats(false);
        } else if (detailName === 'baseStats') {
            setAbout(false);
            setBaseStats(true);
        };
    };

    const getPokemonDetails = async () => {
        const response = (await Api.get(`pokemon/${route.params.pokemonNumber}`));
        if (response === undefined) {
            return undefined
        } else {
            setPokemonDetails(response.data);
            return response.data
        };
    };

    useEffect(() => {
        getPokemonDetails()
            .then((details) => {
                const pokemonAbility = details.abilities.map((abilitySlot) => {
                    return abilitySlot.ability.name;
                })
                setPokemonAbilities(pokemonAbility);
            })
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

                            </View>
                            <ScrollView style={pokemonStyles.details}>
                                {isAbout ? (
                                    <View>
                                        <View style={aboutStyle.aboutDetail}>
                                            <Text style={aboutStyle.aboutTitle}>Number</Text>
                                            <Text style={aboutStyle.aboutDescription}>#{pokemonDetails.id}</Text>
                                        </View>
                                        <View style={aboutStyle.aboutDetail}>
                                            <Text style={aboutStyle.aboutTitle}>Height</Text>
                                            <Text style={aboutStyle.aboutDescription}>{(pokemonDetails.height) / 10} m</Text>
                                        </View>
                                        <View style={aboutStyle.aboutDetail}>
                                            <Text style={aboutStyle.aboutTitle}>Weight</Text>
                                            <Text style={aboutStyle.aboutDescription}>{(pokemonDetails.weight) / 10} kg</Text>
                                        </View>
                                        <View style={aboutStyle.aboutDetail}>
                                            <Text style={aboutStyle.aboutTitle}>Abilities</Text>
                                            <Text style={aboutStyle.aboutAbilities}>{pokemonAbilities.join(', ')}</Text>

                                        </View>
                                    </View>
                                ) : (
                                    <View></View>
                                )}
                                {isBaseStats ? (
                                    <View>
                                        {pokemonDetails.stats.map((statSlot) => {
                                            return (
                                                <View style={baseStatsStyle.statsDetail}>
                                                    <Text style={baseStatsStyle.statTitle}>{(statSlot.stat.name).toUpperCase()}</Text>
                                                    <Text style={baseStatsStyle.statValue}>{statSlot.base_stat}</Text>
                                                    <View style={baseStatsStyle.statBar}>
                                                        <View style={{ height: 8, width: (statSlot.base_stat * 0.86), backgroundColor: pokemonTypeColor.grass }}></View>
                                                    </View>
                                                </View>
                                            )
                                        })}
                                    </View>
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