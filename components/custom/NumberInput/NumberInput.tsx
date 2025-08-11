import { StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    placeholder?: string,
    style?: TextStyle
}

export function NumberInput({ placeholder, style }: Props) {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState("")
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={[style, { flex: 1, fontWeight: "700", textAlignVertical: "center", paddingVertical: 0 }]}
                placeholder={placeholder ? placeholder : ""}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onFocus={() => setEditMode(true)}
                onBlur={() => setEditMode(false)}
                value={value}
                onChangeText={setValue}
            />
            {!editMode && <FontAwesome name="pencil" size={18} color="grey" style={{ padding: 5 }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    }

})