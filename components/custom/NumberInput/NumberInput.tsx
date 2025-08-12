import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    placeholder?: string,
    style?: StyleProp<TextStyle>,
    iconStyle?: StyleProp<ViewStyle>,
    iconSize?: number
}

export function NumberInput({ placeholder, style, iconStyle, iconSize }: Props) {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState("")
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={style}
                placeholder={placeholder ? placeholder : ""}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onFocus={() => setEditMode(true)}
                onBlur={() => setEditMode(false)}
                value={value}
                onChangeText={setValue}
            />
            {!editMode && <FontAwesome name="pencil" size={iconSize ? iconSize : 18} color="grey" style={iconStyle} />}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row"
    },
})