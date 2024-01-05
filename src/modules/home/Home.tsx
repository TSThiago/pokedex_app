import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { homeStyle } from './home.style';

const Home = () => {
    return (
        <View style={homeStyle.home}>
            <Text style={homeStyle.title}>Pokédex</Text>
            <ScrollView style={homeStyle.pokemonList} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={homeStyle.pokemon}>
                    <View >
                        <Text style={homeStyle.pokemonNumber}>#001</Text>
                        <Text style={homeStyle.pokemonName}>Bulbasaur</Text>
                        <View>
                            <Text style={homeStyle.type}>Grass</Text>
                            <Text style={homeStyle.type}>Poison</Text>
                        </View>

                    </View>
                    <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png' }}
                        style={{ width: 180, height: 220, alignSelf: 'flex-end' }} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Home;