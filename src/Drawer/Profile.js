import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class Profile extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textProfile}>This is my Profile page</Text>
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
    textProfile: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})
