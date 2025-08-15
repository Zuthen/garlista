import { Keyboard, StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { coolors } from '../../../colorsPalette';

type Props = {
    placeholder?: string,
    textStyle?: StyleProp<TextStyle>,
    style?: StyleProp<ViewStyle>
    iconStyle?: StyleProp<ViewStyle>,
    iconSize?: number
}

export function NumberInput({ placeholder, textStyle, style, iconStyle, iconSize }: Props) {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState("")

    useEffect(() => {
        const hideSub = Keyboard.addListener("keyboardDidHide", () => {
            setEditMode(false);
        });

        return () => hideSub.remove();
    }, []);

    return (
        <View style={[styles.wrapper, style]}>
            <TextInput
                style={textStyle}
                placeholder={placeholder || ""}
                placeholderTextColor={coolors.walnutBrown}
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