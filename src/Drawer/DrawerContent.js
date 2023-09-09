import React, {Component} from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}>
                    <View style = {styles.profileIcon}>
                        <Image style = {styles.profileImage}
                        source={require('../../assets/bg5.jpeg')}></Image>
                        <View style ={styles.textInfo}>
                        <Text style = {styles.smallText}>Invite</Text>
                        </View>
                    </View>
                    <View style = {styles.infoView}>
                        <Text style = {styles.nameText}>Rinshad</Text>
                        <Text style = {styles.nameTextSub}>Gold</Text>
                        <View style = {styles.coinContainer}>
                            <Text style = {styles.coinText}>Total Coin</Text>
                            <Text style = {styles.coinText}>coin : 2000</Text>
                        </View>
                    </View>
                </View>
                <Text style = {styles.menu}
                onPress= {()=> this.props.navigation.navigate('Home')}>Home</Text>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('Wallet Balance')}>Wallet Balance</Text>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('Records')}>Records</Text>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('Refund and Policies')}>Refund and Policies</Text>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('Settings')}>Settings</Text>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('About Us')}>About Us</Text>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('Help')}>Help</Text>
                <View style = {styles.smallContainer}>
                <Text style = {styles.textLog}
                onPress={() => this.props.navigation.navigate('Logout')}>Logout</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    menu: {
        fontSize: 18,
        color: '#111111',
        marginTop: 10,
        marginLeft: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 15
        
    },
    smallContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    textLog: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        letterSpacing: 2
    },
    profileContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: '#111111',
        flexDirection: 'row',
        marginBottom:12
    },
    profileIcon: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 5
    },
    infoView: {
        marginLeft: 30,
        paddingLeft: 50,
        marginTop: 10
    },
    nameText:{
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    nameTextSub: {
        fontSize: 16,
        color: 'white', 
        backgroundColor: 'grey', 
        textAlign: 'center'
    },
    profileImage: {
        height: '100%',
        width: '100%'
    },
    smallText: {
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'yellow',
        textAlign: 'center'
    },
    textInfo: {
        paddingBottom: 10,
        // alignItems: 'baseline',
        marginTop: 15
    },
    coinText: {
        fontSize: 16,
        color: 'white'
    },
    coinContainer: {
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end'
        paddingLeft: 10,
        marginTop: 60,
        // flexDirection: 'column'
    }

})