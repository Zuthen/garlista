import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function HeaderName() {
    const [value, setValue] = useState("")
    const [editMode, setEditMode] = useState(false)
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.name}
                placeholder='Nazwa'
                multiline
                onFocus={() => setEditMode(true)}
                onBlur={() => setEditMode(false)}
                value={value}
                onChangeText={setValue}>
            </TextInput>
            {!editMode && <FontAwesome name="pencil" size={26} color="grey" style={{ padding: 10 }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        flexWrap: "wrap",
        fontFamily: 'AmaticSC-Bold',
        alignSelf: "center",
        maxHeight: 160,
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})