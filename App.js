import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Searchbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import Flexbox from "./src/flexbox";
import Login from "./src/Login";
import Home from "./src/Drawer/Home";
import Profile from "./src/Drawer/Profile";
import AboutUs from "./src/Drawer/About Us";
import Help from "./src/Drawer/Help";
import Records from "./src/Drawer/Records";
import RefundandPolicies from "./src/Drawer/Refund and Policies";
import Settings from "./src/Drawer/Settings";
import WalletBalance from "./src/Drawer/Wallet Balance";
import Logout from "./src/Drawer/Logout";
import DrawerContent from "./src/Drawer/DrawerContent";
import Videos from "./src/Tab/Videos";
import Chapter from "./src/Tab/Chapter";
// import Resources from "./src/Tab/Resources";
import QNBank from "./src/Tab/QN Bank";
import searchtop from "./src/Tab/searchtop";
import RFashions from "./src/Tab/R Fashions";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name = 'Login'
      component={Login}
      options={{headerShown: false}}/>
      <Stack.Screen
      name='flexbox'
      component={Flexbox}
      options={{ headerShown: false}}
      />
      <Stack.Screen
      name= 'Drawer'
      component= {MyDrawer}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name= 'Tab'
      component={MyTab}
      options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props}/>}>
      <Drawer.Screen
      name= 'Home'
      component={Home}
      />
      <Drawer.Screen
      name= 'Profile'
      component={Profile}
      />
      <Drawer.Screen
      name= 'Wallet Balance'
      component={WalletBalance}
      />
      <Drawer.Screen
      name= 'Records'
      component={Records}
      />
      <Drawer.Screen
      name= 'Refund and Policies'
      component={RefundandPolicies}
      />
      <Drawer.Screen
      name= 'Settings'
      component={Settings}
      />
      <Drawer.Screen
      name= 'About Us'
      component={AboutUs}
      />
      <Drawer.Screen
      name= 'Help'
      component={Help}
      />
      <Drawer.Screen
      name= 'Logout'
      component={Logout}
      />
    </Drawer.Navigator>
  )
}

function MyTab(){
  return(
    <View style = {styles.container}>
        <Searchbar
        placeholder="Search"
        // component ={searchtop}
        />
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {fontSize: 12},
      tabBarItemStyle: {width: 100},
      tabBarStyle: {backgroundColor: '#fff'}
    }}>
      <Tab.Screen
      name= 'Videos'
      component= {Videos}
      options={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused})=> 
        focused ? <Icon name= 'videocam' size={24} color='black'/> : <Icon name= 'videocam' size={24} color= 'gray'/>
      }}
      />
      <Tab.Screen
      name= 'Chapter'
      component= {Chapter}
      options={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused})=>
        focused ? <Icon name= 'category' size={24} color= 'black'/> : <Icon name= 'category' size={24} color= 'gray'/>
      }}
      />
      <Tab.Screen
      name= 'R Fashions'
      component={RFashions}
      options={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused})=> 
        focused ? <Icon name= 'data-thresholding' size={24} color= 'black'/> : <Icon name= 'data-thresholding' size={24} color= 'gray'/>
      }}
      />
      <Tab.Screen
      name= 'QN Bank'
      component= {QNBank}
      options={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused})=>
        focused ? <Icon name= 'task' size={24} color= 'black'/> : <Icon name='task' size={24} color= 'gray'/>
      }}
      />
     </Tab.Navigator>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}