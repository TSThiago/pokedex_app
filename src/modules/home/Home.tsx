import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { homeStyle } from './home.style';
import { useEffect, useState } from 'react';
import getPokemons from '../../services/api/getPokemons';
import { PokemonPage } from '../../types/pokemon.interface';
import axios from 'axios';
import { styles } from '../../styles/global.style';

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonPages, setPokemonPages] = useState<PokemonPage[] | undefined>([])

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
                    return pokes;
                };
            });
    };

    useEffect(() => {
        getPokemonURLS()
    }, [])


    return (
        <View style={homeStyle.home}>
            <Text style={homeStyle.title}>Pokédex</Text>
            <ScrollView style={homeStyle.pokemonList} showsVerticalScrollIndicator={false}>
                {pokemons.map((pokemon) => {
                    return (
                        <TouchableOpacity style={homeStyle.pokemon}>
                            <View >
                                <Text style={homeStyle.pokemonNumber}>#{pokemon.id}</Text>
                                <Text style={homeStyle.pokemonName}>{pokemon.name}</Text>
                                <View>
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


    )
}

export default Home;