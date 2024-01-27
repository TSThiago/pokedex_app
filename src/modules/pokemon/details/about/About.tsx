import { Text, View } from "react-native"
import { aboutStyle } from "./about.style";
import { useState } from "react";
import getPokemonDetails from "../../../../services/api/getPokemonDetails";

const About = () => {
    const [abilities, setAbilities] = useState<string[]>([])
    const [heigth, setHeight] = useState<number>()
    const [weight, setWeight] = useState<number>()

    return (
        <View>
            <View style={aboutStyle.aboutDetail}>
                <Text style={aboutStyle.aboutTitle}>Species</Text>
                <Text style={aboutStyle.aboutDescription}>Seed</Text>
            </View>
            <View style={aboutStyle.aboutDetail}>
                <Text style={aboutStyle.aboutTitle}>Height</Text>
                <Text style={aboutStyle.aboutDescription}>0,70cm</Text>
            </View>
            <View style={aboutStyle.aboutDetail}>
                <Text style={aboutStyle.aboutTitle}>Weight</Text>
                <Text style={aboutStyle.aboutDescription}>6,9kg</Text>
            </View>
            <View style={aboutStyle.aboutDetail}>
                <Text style={aboutStyle.aboutTitle}>Abilities</Text>
                <Text style={aboutStyle.aboutDescription}>Overgrow, Chlorophyl</Text>
            </View>
        </View>
    )
}

export default About;