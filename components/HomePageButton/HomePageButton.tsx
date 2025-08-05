import { StyleProp, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { coolors } from '../../colorsPalette'
import React, { ReactNode } from 'react'

type Props = {
    color: string,
    text: string,
    textColor?: string,
    children?: ReactNode,
}

export function HomePageButton({ color, children, text, textColor }: Props) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} >
            {children}
            <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    buttonText: {
        color: coolors.drabDarkBrown,
        textAlign: "center",
        fontFamily: 'Quicksand',
        fontSize: 40,
        flexWrap: "wrap"

    },
})