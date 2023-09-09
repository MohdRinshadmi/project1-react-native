import React, { Component } from "react";
import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';
import axios from "axios";

export default class RFashions extends Component{

    constructor(){
        super();
        this.state = {
            loader: false,
            DATA: []
        }
    }

    getData(){
        this.setState({loader: true})
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((response) => {
            if(response.length>0){
                this.setState({DATA: response})
            }
            this.setState({loader: false})
            // console.log('Your Response is:', response)
        })
        .catch((error) => {
            this.setState({loader: false})
            console.log('Error is:', error)
        })
    }

    getAxiosData(){
        this.setState({loader: true})
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            this.setState({loader: false})
            console.log('AXIOS Response is', response)
        })
        .catch((error) => {
            this.setState({loader: false})
            console.log('AXIOS Error', error)
        })
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        const renderItem = ({item}) => (
            <View style = {styles.itemContainer}>
                <Text style = {styles.itemText}>{item.title}</Text>
                <Text style = {styles.itemPrice}>{item.price}</Text>
            </View>
        )
        return(
            <View style = {styles.drawerContainer}>
                <ActivityIndicator size= 'large' color= 'black' animating= {this.state.loader}/>
                <Text style = {styles.textLog}
                onPress={() => this.getAxiosData()}>This is our list to shine</Text>
                <FlatList style = {{width: '95%', marginTop: 10}}
                data={this.state.DATA}
                renderItem={renderItem}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    textLog: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    itemContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#ffffff',
        elevation: 4,
        marginBottom: 10
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111111'
    },
    itemPrice: {
        fontSize: 14,
        color: '#3d6cb9',
        fontWeight: 'bold',
        marginTop: 10
    }
})
