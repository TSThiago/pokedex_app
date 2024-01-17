import React from 'react';
import { styles } from './src/styles/global.style';
import {
  SafeAreaView,
  ImageBackground
} from 'react-native';
import Home from './src/modules/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemon from './src/modules/pokemon/Pokemon';

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Pokemon' component={Pokemon}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
