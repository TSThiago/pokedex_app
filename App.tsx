import React from 'react';
import { styles } from './src/styles/global.style';
import {
  SafeAreaView,
  ImageBackground
} from 'react-native';
import Home from './src/modules/home/Home';

const backgroundImage = {uri: 'https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png'};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
        <Home />
      </ImageBackground>

    </SafeAreaView>
  );
}


export default App;
