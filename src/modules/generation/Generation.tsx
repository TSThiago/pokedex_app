import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import { generationStyle } from './generation.style';
import { useEffect, useState } from 'react';
import getPokemons from '../../services/api/getPokemons';
import axios from 'axios';
import { styles } from '../../styles/global.style';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';
import { backgroundImage } from '../../shared/backgroundImage/backgroundImage';

const Generation = ({ route }) => {
    const navigation = useNavigation<StackTypes>();
    const [pokemons, setPokemons] = useState([])

    const getPokemonURLS = async () => {
        getPokemons(route.params.offset, route.params.limit)
            .then(async (res) => {
                if (res === undefined) {
                    console.log("ERROR: POKEMON LIST UNDEFINED");
                } else {
                    const pokes = await Promise.all(
                        res.map(async (resp) => {
                            const res = (await axios.get(resp.url)).data;
                            return res;
                        })
                    );
                    setPokemons(pokes)
                };
            });
    };

    useEffect(() => {
        getPokemonURLS()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
                <View style={generationStyle.home}>
                    <Text style={generationStyle.title}>Generation {route.params.generation}</Text>
                    <ScrollView style={generationStyle.pokemonList} showsVerticalScrollIndicator={false}>
                        {pokemons.map((pokemon) => {
                            return (
                                <TouchableOpacity key={pokemon.id} onPress={() => {
                                    navigation.navigate('Pokemon', {
                                        pokemonName: pokemon.name,
                                        pokemonNumber: pokemon.id
                                    })
                                }} style={generationStyle.pokemon}>
                                    <View >
                                        <Text style={generationStyle.pokemonNumber}>#{pokemon.id}</Text>
                                        <Text style={generationStyle.pokemonName}>{pokemon.name}</Text>
                                        <View style={generationStyle.types}>
                                            {pokemon.types.map((typeSloth) => {
                                                return (
                                                    <Text style={generationStyle.type}>{typeSloth.type.name}</Text>
                                                )
                                            })}
                                        </View>
                                    </View>
                                    <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png` }}
                                        style={{ width: 170, height: 200, alignSelf: 'flex-end' }} />
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Generation;