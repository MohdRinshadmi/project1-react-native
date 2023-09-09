import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class AboutUs extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textAbout}>This is About Us page</Text>
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
    textAbout: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})
