import { StyleSheet } from "react-native";

export const baseStatsStyle = StyleSheet.create({
    statsDetail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statTitle: {
        width: 70,
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        opacity: 0.6,
        marginBottom: 5
    },
    statValue: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        marginLeft: 'auto'
    },
    statBar: {
        width: 255,
        borderWidth: 1,
        // height: 10,
        marginLeft: 'auto'
    },

})