import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class WalletBalance extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textWallet}>This is my WalletBalance page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textWallet: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})
