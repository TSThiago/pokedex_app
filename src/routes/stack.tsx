import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../modules/home/Home';
import Pokemon from '../modules/pokemon/Pokemon';
import Generation from '../modules/generation/Generation';

const Stack = createNativeStackNavigator()

type StackNavigation = {
    Home: { pokemonName: string };
    Pokemon: undefined;
  };

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const StackComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Generation' component={Generation} initialParams={{generation : 1, offset : 0, limit: 151}}/>
        <Stack.Screen name='Pokemon' component={Pokemon} initialParams={{pokemonName: 'bulbasaur', pokemonNumber: 1}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default StackComponent;