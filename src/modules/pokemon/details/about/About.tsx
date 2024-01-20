import { Text, View } from "react-native"
import { aboutStyle } from "./about.style";

const About = () => {
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