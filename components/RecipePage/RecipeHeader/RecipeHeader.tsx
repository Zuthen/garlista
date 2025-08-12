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
                <Text style={[styles.amountData, styles.recipeDetailsFont]}>Przepis na</Text>
                <NumberInput placeholder="ile?" style={[styles.recipeDetailsFont, styles.amountData]} iconStyle={styles.icon} iconSize={styles.icon.fontSize} />
                <Select
                    style={[styles.amountData]}
                    textStyle={styles.recipeDetailsFont}
                    options={amounts}
                    defaultValue={{ label: 'porcji', value: 'porcji' }}
                    iconStyle={styles.icon}
                    iconSize={styles.icon.fontSize}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        padding: 15,
    },
    dishAmount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    amountData: {
        minWidth: 60,
        height: 60,
        marginRight: 10,
        justifyContent: "center",
        textAlignVertical: "center",
        textAlign: "right"
    },
    recipeDetailsFont: {
        fontWeight: '600',
        fontFamily: 'Quicksand',
        fontSize: 20,
    },
    icon: {
        padding: 5,
        alignSelf: "center",
        fontSize: 18
    }
})