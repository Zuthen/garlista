import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function HeaderName() {
    const [value, setValue] = useState("");
    const [editMode, setEditMode] = useState(false);
    const inputRef = useRef<TextInput>(null);

    return (
        <View style={styles.wrapper}>
            {editMode ? (
                <TextInput
                    style={[styles.name, styles.input]}
                    placeholder="Nazwa"
                    value={value}
                    onChangeText={setValue}
                    returnKeyType="done"
                    onSubmitEditing={() => inputRef.current?.blur()}
                    onBlur={() => setEditMode(false)}
                    autoFocus
                    ref={inputRef}
                />
            ) : (
                <TouchableOpacity onPress={() => setEditMode(true)} style={{ flex: 1 }}>
                    <Text style={styles.name}>
                        {value || "Nazwa"}
                    </Text>
                </TouchableOpacity>
            )}
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
