import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Select } from '../../custom/Select/Select'
import { HeaderName } from '../HeaderName/HeaderName'
import { NumberInput } from '../../custom/NumberInput/NumberInput'

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
            <HeaderName />
            <View style={styles.dishAmount}>
                <Text style={[styles.amountData, { flex: 4, flexWrap: "nowrap", fontWeight: "700", fontSize: 22 }]}>Przepis na</Text>
                <NumberInput placeholder='ile?' style={styles.numberInputStyle} />
                <Select style={{ flex: 4, alignItems: "flex-start" }} textStyle={{ fontWeight: "700" }} options={amounts} defaultValue={{ label: 'porcji', value: 'porcji' }} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    dishAmount: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 30
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
    },
    numberInputStyle: {
        flex: 3,
        fontWeight: "700",
        fontSize: 20,
        textAlign: 'center',
        flexShrink: 1,
        minWidth: 50,
    }

})