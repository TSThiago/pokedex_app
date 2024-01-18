import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import { homeStyle } from './home.style';
import { useEffect, useState } from 'react';
import getPokemons from '../../services/api/getPokemons';
import axios from 'axios';
import { styles } from '../../styles/global.style';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';
import { backgroundImage } from '../../shared/backgroundImage/backgroundImage';

const Home = () => {
    const navigation = useNavigation<StackTypes>();
    const [pokemons, setPokemons] = useState([])

    const getPokemonURLS = async () => {
        getPokemons()
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
                <View style={homeStyle.home}>
                    <Text style={homeStyle.title}>Pokédex</Text>
                    <ScrollView style={homeStyle.pokemonList} showsVerticalScrollIndicator={false}>
                        {pokemons.map((pokemon) => {
                            return (
                                <TouchableOpacity key={pokemon.id} onPress={() => {
                                    navigation.navigate('Pokemon', {
                                        pokemonName: pokemon.name
                                    })
                                }} style={homeStyle.pokemon}>
                                    <View >
                                        <Text style={homeStyle.pokemonNumber}>#{pokemon.id}</Text>
                                        <Text style={homeStyle.pokemonName}>{pokemon.name}</Text>
                                        <View style={homeStyle.types}>
                                            {pokemon.types.map((typeSloth) => {
                                                return (
                                                    <Text style={homeStyle.type}>{typeSloth.type.name}</Text>
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

export default Home;