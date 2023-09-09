import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class Records extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textRecord}>This is my Record page</Text>
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
    textRecord: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})
