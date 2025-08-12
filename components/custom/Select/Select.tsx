import { StyleSheet, Text, View, Modal, Pressable, StyleProp, ViewStyle, TextStyle, ScrollView } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react'


type Option = {
    label: string,
    value: any
}

type Props = {
    options: Option[],
    defaultValue: Option,
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    iconStyle?: StyleProp<ViewStyle>,
    iconSize?: number
}

export function Select({ options, defaultValue, style, textStyle, iconStyle, iconSize }: Props) {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedValue, setSelectedValue] = useState<Option>(defaultValue)

    return (
        <View style={style}>
            <Pressable onPress={() => setShowOptions(true)} style={styles.select}>
                <Text style={[styles.value, textStyle]}>{selectedValue.label}</Text>
                <FontAwesome name="pencil" size={iconSize ? iconSize : 18} color="grey" style={iconStyle} />
            </Pressable>


            {showOptions &&
                <Modal transparent>
                    <View style={styles.modalOverlay} accessibilityLabel='modal'>

                        <View style={styles.modal}>

                            <ScrollView>
                                {options.map((item) => (
                                    <Pressable key={item.value} onPress={() => {
                                        setSelectedValue(item)
                                        setShowOptions(false)
                                    }}>
                                        <Text style={styles.option}>{item.label}</Text>
                                    </Pressable>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    value: {
        fontFamily: 'Quicksand',
        fontSize: 20,
        alignSelf: "flex-start",
        minWidth: 40,
        padding: 5
    },
    modal: {
        marginHorizontal: 30,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 8,
        elevation: 5,
        width: "50%",
        height: "40%",
        alignSelf: "center",
        verticalAlign: "middle"
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    option: {
        fontFamily: 'Quicksand',
        fontSize: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    select: {
        flexDirection: 'row',
        alignItems: "center"
    }
})