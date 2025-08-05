import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import { coolors } from '../colorsPalette'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { HomePageButton } from '../components/HomePageButton/HomePageButton';
import Header from '../components/Header/Header';


export function WelcomePage() {
    return (
        <View style={styles.mainView}>
            <Header />
            <View style={{ flex: 1, flexDirection: "row" }}>
                <HomePageButton color={coolors.ecru} text='Przepisy' textColor={coolors.walnutBrown}>
                    <MaterialCommunityIcons name="pot-steam" size={60} color={coolors.walnutBrown} />
                </HomePageButton>

                <HomePageButton color={coolors.walnutBrown} text='Listy zakupów' textColor={coolors.ecru}>
                    <FontAwesome5 name="clipboard-list" size={40} color={coolors.ecru} />
                </HomePageButton>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: "100%",
        backgroundColor: coolors.sage,
        flexDirection: "column",
        paddingBottom: 40

    },


})