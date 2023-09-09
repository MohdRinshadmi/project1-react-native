import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
// import { Searchbar } from "react-native-paper";

export default class Videos extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textLog}>Videos</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    textLog: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    }
})
