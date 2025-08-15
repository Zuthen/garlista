import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { coolors } from '../../../colorsPalette'

type Igredient = {
    name: string
    quantity: number
    unit: string
}


function IgredientsListItem({ name, quantity, unit }: Igredient) {
    const [newName, setNewName] = useState(name)
    const [newQuantity, setNewQuantity] = useState(quantity)
    const [newUnit, setNewUnit] = useState(unit)
    return (
        <View style={styles.listItem}>
            <TextInput style={[styles.input, styles.name]} value={newName} onChangeText={(text) => setNewName(text)} />
            <TextInput
                style={[styles.input, styles.quantity]}
                value={newQuantity.toString()}
                keyboardType="numeric"
                onChangeText={(text) => setNewQuantity(Number(text))}
            />
            <TextInput style={[styles.input, styles.unit]} value={newUnit} onChangeText={(text) => setNewUnit(text)} />
        </View>
    )
}

type Igredients = {
    igredients: Igredient[]
}

export function Igredients({ igredients }: Igredients) {
    return (
        <View style={styles.card}>
            <Text style={styles.igredients}>Składniki</Text>
            <FlatList data={igredients} renderItem={({ item }) => <IgredientsListItem name={item.name} quantity={item.quantity} unit={item.unit} />} keyExtractor={item => item.name} />
        </View>
    )
}

const styles = StyleSheet.create({
    igredients: {
        fontWeight: '600',
        fontFamily: 'Quicksand',
        fontSize: 30,
        textAlign: 'center',
        color: coolors.drabDarkBrown,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 20,
        width: '100%',
        paddingVertical: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    input: {
        fontWeight: '600',
        fontFamily: 'Quicksand',
        fontSize: 15,
        color: coolors.drabDarkBrown,
        paddingHorizontal: 6,
        height: 40,
    },
    name: {
        flex: 1,
        marginRight: 10,
    },
    quantity: {
        width: 60,
        textAlign: "right",
        marginRight: 10,
    },
    unit: {
        width: 80,
        textAlign: 'left',
    },
})
