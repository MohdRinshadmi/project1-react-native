import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableHighlight } from "react-native";
 
export default class Login  extends Component{
    constructor(){
        super();
        this.state = {
            name: null
        }
    }

    updateValue(username){
        console.log(username)
        this.setState({name: username})
    }
  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground source={require('../assets/light1.jpg')}
        style = {styles.imageView}>
          <Image source={require('../assets/react.jpg')}
          style = {styles.logo}>
          </Image>
          <Text style = {styles.textView}>Welcome to React Native journey</Text>
          <Text style = {styles.textView}>Here we go!</Text>
          <TextInput style = {styles.inputView}
          placeholder="Username"
          placeholderTextColor='#ffffff'
          maxLength={10}
          onChangeText={(username) => this.updateValue(username)}>
          </TextInput>
          <TextInput style = {styles.inputView}
          placeholder="Password"
          placeholderTextColor='#ffffff'
          maxLength={12}
          secureTextEntry = {true}>
          </TextInput>
          <TouchableHighlight style = {styles.button}
          underlayColor= 'transparent'
          onPress={() => this.props.navigation.navigate('Tab',{username: this.state.name})}>
            <Text style = {styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10
  },
  inputView: {
    width: '80%',
    height: 55,
    borderRadius: 8,
    backgroundColor: '#d279ee',
    marginTop: 50,
    paddingLeft: 20,
    borderColor: '#000000'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111'
  },
  button: {
    width: '35%',
    height: 45,
    backgroundColor: '#ffffff',
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})