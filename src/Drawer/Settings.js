import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class Settings extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textSettings}>This is my Settings page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    textSettings: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})
