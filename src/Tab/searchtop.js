import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import {Searchbar} from "react-native-paper"

export default class searchtop extends Component{
    render(){
        return(
            <View style = {styles.searchContainer}>
                <Searchbar placeholder = 'Search'
                style = {styles.searchPlace}/>
                <Text style = {styles.textStyle}>Search Here</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'white'
    },
    textStyle: {
        margin: 60
    },
    searchPlace: {
        backgroundColor: 'gray'
    }
})