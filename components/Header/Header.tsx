import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../Logo'
import { coolors } from '../../colorsPalette'

export default function Header() {
    return (
        <View style={styles.logoView}>
            <Logo width={200} height={200} />
            <Text style={styles.header}>Gar-lista</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoView: {
        flex: 1,
        paddingTop: 100,
        alignContent: "center",
        alignItems: "center",

    },
    header: {
        color: coolors.walnutBrown,
        textAlign: "center",
        fontFamily: 'AmaticSC-Bold',
        fontSize: 80,
        paddingBottom: 40
    }
})