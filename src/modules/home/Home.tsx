import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { homeStyle } from './home.style';
import Api from '../../services/api/getPokemons';
import { useEffect, useState } from 'react';

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState("")

    const getPokemons = async (offset: number, limit: number) => {
        try {
            const response = await Api.get(`pokemon?offset=${offset}&limit=${limit}`);
            setPokemons(response.data.results)
        } catch (error) {
            console.log("ERROR " + error)
        }
    }

    useEffect(() => {
        getPokemons(0, 5)
    }, [])

    return (
        <View style={homeStyle.home}>
            <Text style={homeStyle.title}>Pokédex</Text>
            <ScrollView style={homeStyle.pokemonList} showsVerticalScrollIndicator={false}>
                {pokemons.map((pokemon) => {
                    return (
                        <TouchableOpacity style={homeStyle.pokemon}>
                            <View >
                                <Text style={homeStyle.pokemonNumber}>#001</Text>
                                <Text style={homeStyle.pokemonName}>{pokemon.name}</Text>
                                <View>
                                    <Text style={homeStyle.type}>Grass</Text>
                                    <Text style={homeStyle.type}>Poison</Text>
                                </View>

                            </View>
                            <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png' }}
                                style={{ width: 180, height: 220, alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>


    )
}

export default Home;