import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class QNBank extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textLog}>QN Bank</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple'
    },
    textLog: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    }
})
