import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class Help extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textHelp}>This is Help page</Text>
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
    textHelp: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})
