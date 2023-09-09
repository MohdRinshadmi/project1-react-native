import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class Logout extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textLog}>This is Logout page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    textLog: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111111'
    }
})
