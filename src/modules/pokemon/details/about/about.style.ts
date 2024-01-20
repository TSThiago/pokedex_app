import { StyleSheet } from "react-native"

export const aboutStyle = StyleSheet.create({
    aboutDetail: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'flex-end' 
    },
    aboutTitle: {
        width: 67,
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        opacity: 0.6,
        
    },
    aboutDescription: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        marginLeft: 30
    }
})