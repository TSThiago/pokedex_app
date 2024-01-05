import React from 'react';
import { styles } from './src/styles/global.style';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useColorScheme,
  Image
} from 'react-native';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <ScrollView style={styles.pokemonList}>
        <View style={styles.pokemon}>
          <View >
            <Text style={styles.pokemonNumber}>#001</Text>
            <Text style={styles.pokemonName}>Bulbasaur</Text>
            <View>
              <Text style={styles.type}>Grass</Text>
              <Text style={styles.type}>Poison</Text>
            </View>

          </View>
          <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png' }}
            style={{ width: 180, height: 230, alignSelf: 'flex-end' }} />
        </View>
        <View style={styles.pokemon}>
          <View >
            <Text style={styles.pokemonNumber}>#001</Text>
            <Text style={styles.pokemonName}>Bulbasaur</Text>
            <View>
              <Text style={styles.type}>Grass</Text>
              <Text style={styles.type}>Poison</Text>
            </View>

          </View>
          <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png' }}
            style={{ width: 180, height: 230, alignSelf: 'flex-end' }} />
        </View>
        <View style={styles.pokemon}>
          <View >
            <Text style={styles.pokemonNumber}>#001</Text>
            <Text style={styles.pokemonName}>Bulbasaur</Text>
            <View>
              <Text style={styles.type}>Grass</Text>
              <Text style={styles.type}>Poison</Text>
            </View>

          </View>
          <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png' }}
            style={{ width: 180, height: 230, alignSelf: 'flex-end' }} />
        </View>
        <View style={styles.pokemon}>
          <View >
            <Text style={styles.pokemonNumber}>#001</Text>
            <Text style={styles.pokemonName}>Bulbasaur</Text>
            <View>
              <Text style={styles.type}>Grass</Text>
              <Text style={styles.type}>Poison</Text>
            </View>

          </View>
          <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png' }}
            style={{ width: 180, height: 230, alignSelf: 'flex-end' }} />
        </View>
        <View style={styles.pokemon}>
          <View >
            <Text style={styles.pokemonNumber}>#001</Text>
            <Text style={styles.pokemonName}>Bulbasaur</Text>
            <View>
              <Text style={styles.type}>Grass</Text>
              <Text style={styles.type}>Poison</Text>
            </View>

          </View>
          <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png' }}
            style={{ width: 180, height: 230, alignSelf: 'flex-end' }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
