import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default class RefundandPolicies extends Component{
    render(){
        return(
            <View style = {styles.drawerContainer}>
                <Text style = {styles.textRf}>This is Refund and Policies page</Text>
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
    textRf: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})
