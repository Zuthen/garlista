import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import RecipeHeader from '../components/RecipePage/RecipeHeader/RecipeHeader'
import { Igredients } from '../components/RecipePage/Igredients/Igredients'


export default function RecipePage() {
    // const testIngredients = [
    //     { name: 'Syrop klonowy', quantity: 20, unit: 'ml' },
    //     { name: 'Mąka pszenna', quantity: 500, unit: 'g' },
    //     { name: 'Cukier', quantity: 200, unit: 'g' },
    //     { name: 'Masło', quantity: 100, unit: 'g' },
    //     { name: 'Jajka', quantity: 3, unit: 'szt.' },
    //     { name: 'Mleko', quantity: 250, unit: 'ml' },
    //     { name: 'Sól', quantity: 5, unit: 'g' },
    // ]

    return (
        <View style={styles.recipe}>
            <RecipeHeader />
            {/* <Igredients igredients={testIngredients} /> */}
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