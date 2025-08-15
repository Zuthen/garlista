import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState, useRef } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function HeaderName() {
    const [value, setValue] = useState("");
    const [editMode, setEditMode] = useState(false);
    const inputRef = useRef<TextInput>(null);

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={[styles.name, styles.input]}
                value={value}
                onChangeText={setValue}
                placeholder='Nazwa'
                onFocus={() => setEditMode(true)}
                returnKeyType="done"
                onSubmitEditing={() => { inputRef.current?.blur(); setEditMode(false) }}
                ref={inputRef}
            />
            {!editMode && (
                <FontAwesome name="pencil" size={26} color="grey" style={{ padding: 10 }} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        flexWrap: "wrap",
        fontFamily: 'AmaticSC-Bold',
        alignSelf: "center",
        maxHeight: 160,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    }
});
