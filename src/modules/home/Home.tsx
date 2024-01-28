import { useNavigation } from "@react-navigation/native"
import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { StackTypes } from "../../routes/stack"
import { homeStyle } from "./home.style";
import { backgroundImage } from "../../shared/backgroundImage/backgroundImage";

const Home = () => {
    const navigation = useNavigation<StackTypes>()

    return (
        <View style={homeStyle.home}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={homeStyle.backgroundImage}>
                <Text style={homeStyle.title}>Pokédex</Text>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 1,
                        offset: 0,
                        limit: 151,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 2,
                        offset: 151,
                        limit: 100,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 3,
                        offset: 251,
                        limit: 135,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 4,
                        offset: 386,
                        limit: 107,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 5,
                        offset: 493,
                        limit: 155,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 6,
                        offset: 649,
                        limit: 71,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 7,
                        offset: 721,
                        limit: 88,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 8,
                        offset: 809,
                        limit: 96,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.button} onPress={() => {
                    navigation.navigate('Generation', {
                        generation: 9,
                        offset: 905,
                        limit: 119,
                    })
                }}>
                    <Text style={homeStyle.buttonText}>Generation 9</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
};

export default Home;