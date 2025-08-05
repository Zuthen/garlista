import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { Select } from '../components/Select/Select'
import RecipeHeader from '../components/RecipeHeader/RecipeHeader'


export default function RecipePage() {

    return (
        <View style={styles.recipe}>
            <RecipeHeader />
        </View >
    )
}

const styles = StyleSheet.create({
    recipe: {
        flex: 1,
        width: "100%",
        padding: 15,
    },

})