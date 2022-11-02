//import * as React from 'react';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {WebView} from 'react-native-webview';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { firebase } from '@react-native-firebase/functions'


class MyTokenSignIn extends Component {
  render() {
    return(
      <View style={styles.container} >
        <Text>Made it here.</Text>
        
      </View>
    );
  }
}

class MyWeb extends Component {
  webview = null;
  authURL = 'https://login.ku.edu/login/oauth2/auth?client_id=XXX&response_type=code&redirect_uri=https://example.com/oauth_complete&state=YYY&scope=<value_1>%20<value_2>%20<value_n>';
  successURL = 'https://example.com/oauth_complete&state=YYY&scope=<value_1>%20<value_2>%20<value_n>';

  render() {
      <WebView
        ref={(ref) => (this.webview = ref)}
        source={{ uri: this.authURL }}
      />
  }
 }


//Commented out sections from a scrapped email and password sign-in screen. Pretty sure that will not be needed
const SignInScreen = ({navigation}) => {
  // const [clientID, setClientID] = useState('');
  // const [clientSecret, setClientSecret] = useState('');
  return (
    <View style = {styles.container}>
      <View ><Text style={styles.inputView}>Sign-in to your Canvas!</Text></View>
      <Button title="Sign in" onPress={() => navigation.navigate('CanvasPersonalSignIn')} />
    </View>
  );
}

const ProfileScreen = ({naviagtion, route}) => {
  return(
    <View style ={styles.container}>
      <Text>Email: {route.params.clientID}</Text>
      <Text>Password: {route.params.clientSecret}</Text> 
    </View>
  );
}

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

function Tabs() {
  return(
    <NavigationContainer>
      <tab.Navigator>
      </tab.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={SignInScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="CanvasWebSignIn" component={MyWeb} />
        <Stack.Screen name="CanvasPersonalSignIn" component={MyTokenSignIn} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width:"80%",
    borderRadius: 25,
    height:50,
    alignItems: "center",
    justifyContent:"center",
    marginTop: 40,
    backgroundCoor: "#FF1493"
  },
  inputView: {
    borderRadius: 30,
    width: "70%",
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  }
});
