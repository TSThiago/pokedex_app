import { Text, View } from "react-native"
import { baseStatsStyle } from "./baseStats.style";
import { pokemonTypeColor } from "../../../../shared/colors/colors";

const BaseStats = () => {
    return (
        <View>
            <View style={baseStatsStyle.statsDetail}>
                <Text style={baseStatsStyle.statTitle}>HP</Text>
                <Text style={baseStatsStyle.statValue}>45</Text>
                <View style={baseStatsStyle.statBar}>
                    <View style={{ height: 8, width: 45, backgroundColor: pokemonTypeColor.grass }}></View>
                </View>
            </View>
            <View style={baseStatsStyle.statsDetail}>
                <Text style={baseStatsStyle.statTitle}>Attack</Text>
                <Text style={baseStatsStyle.statValue}>49</Text>
                <View style={baseStatsStyle.statBar}>
                    <View style={{ height: 8, width: 49, backgroundColor: pokemonTypeColor.grass }}></View>
                </View>
            </View>
            <View style={baseStatsStyle.statsDetail}>
                <Text style={baseStatsStyle.statTitle}>Defense</Text>
                <Text style={baseStatsStyle.statValue}>49</Text>
                <View style={baseStatsStyle.statBar}>
                    <View style={{ height: 8, width: 49, backgroundColor: pokemonTypeColor.grass }}></View>
                </View>
            </View>
            <View style={baseStatsStyle.statsDetail}>
                <Text style={baseStatsStyle.statTitle}>Sp. Atk</Text>
                <Text style={baseStatsStyle.statValue}>65</Text>
                <View style={baseStatsStyle.statBar}>
                    <View style={{ height: 8, width: 65, backgroundColor: pokemonTypeColor.grass }}></View>
                </View>
            </View>
            <View style={baseStatsStyle.statsDetail}>
                <Text style={baseStatsStyle.statTitle}>Sp. Def</Text>
                <Text style={baseStatsStyle.statValue}>65</Text>
                <View style={baseStatsStyle.statBar}>
                    <View style={{ height: 8, width: 65, backgroundColor: pokemonTypeColor.grass }}></View>
                </View>
            </View>
            <View style={baseStatsStyle.statsDetail}>
                <Text style={baseStatsStyle.statTitle}>Speed</Text>
                <Text style={baseStatsStyle.statValue}>45</Text>
                <View style={baseStatsStyle.statBar}>
                    <View style={{ height: 8, width: 45, backgroundColor: pokemonTypeColor.grass }}></View>
                </View>
            </View>
        </View>
    );
};

export default BaseStats;