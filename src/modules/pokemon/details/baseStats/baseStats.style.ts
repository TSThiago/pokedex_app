import { StyleSheet } from "react-native";

export const baseStatsStyle = StyleSheet.create({
    statsDetail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statTitle: {
        width: 80,
        paddingVertical: 4,
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        opacity: 0.6,
        marginBottom: 5
    },
    statValue: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        marginLeft: 'auto'
    },
    statBar: {
        width: 220,
        borderWidth: 1,
        marginLeft: 'auto'
    },

})