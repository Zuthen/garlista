import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Select } from '../Select/Select'

export default function RecipeHeader() {

    const amounts = [
        { label: 'porcji', value: 'porcji' },
        { label: 'sztuk', value: 'sztuk' },
        { label: 'g', value: 'g' },
        { label: 'kg', value: 'kg' },
        { label: 'litr', value: 'l' },
        { label: 'ml', value: 'ml' },
    ]

    return (
        <View style={styles.card}>
            <TextInput style={styles.name} placeholder='Nazwa' multiline />
            <View style={styles.dishAmount}>
                <Text style={[styles.amountData, { flex: 4, flexWrap: "nowrap", fontWeight: "700", fontSize: 22 }]}>Przepis na</Text>
                <TextInput style={[styles.amountData, { minWidth: 30, flex: 1, alignItems: "flex-end", fontWeight: "700" }]} placeholder='ile?' keyboardType='numeric' />
                <Select style={{ flex: 2, alignItems: "flex-start" }} textStyle={{ fontWeight: "700" }} options={amounts} defaultValue={{ label: 'porcji', value: 'porcji' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        flexWrap: "wrap",
        fontFamily: 'AmaticSC-Bold',
        alignSelf: "center",
        maxHeight: 160

    },
    dishAmount: {
        flexDirection: "row",
        alignItems: "center",
    },
    amountData: {
        fontWeight: "600",
        fontFamily: 'Quicksand',
        fontSize: 20,
    },
    card: {
        backgroundColor: "white",
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        padding: 15

    }
})