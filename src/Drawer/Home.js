import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textHome}>This is my Home page</Text>
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
    textHome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})
