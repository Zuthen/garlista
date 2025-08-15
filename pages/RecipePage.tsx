import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { Select } from '../components/custom/Select/Select'
import RecipeHeader from '../components/RecipePage/RecipeHeader/RecipeHeader'
import Igredients from '../components/RecipePage/Igredients/Igredients'


export default function RecipePage() {

    return (
        <View style={styles.recipe}>
            <RecipeHeader />
            <Igredients />
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