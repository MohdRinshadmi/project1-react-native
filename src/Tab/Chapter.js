import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class Chapter extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textLog}>Chapter</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    }
})
