//import * as React from 'react';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {WebView} from 'react-native-webview';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {firebase, functions} from '@react-native-firebase/functions';


const MyTokenSignIn = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {id, password, token} = route.params;
  const clientID = id.clientID;
  const clientPassword = password.clientSecret;
  const clientToken = token.clientToken;

  useEffect(() => {
    setLoading(false);
    // functions().httpsCallable('listProducts')().then(response => {
    //   setProducts(response.data);
    //   setLoading(false);
    // });
  }, []);

  if (!loading){
    return(
      <View style={styles.container} >
        <Text>Made it here.</Text>
        <Text>id: {JSON.stringify(clientID)}</Text>
        <Text>id: {JSON.stringify(clientPassword)}</Text>
        <Text>id: {JSON.stringify(clientToken)}</Text>
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
  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [clientToken, setClientToken] = useState('');

  return (
    <View style = {styles.container}>
      <View ><Text style={styles.inputView}>Sign-in to your Canvas!</Text></View>
      <View style={styles.inputView}>
        <TextInput
        //style={styles.textInput}
        placeholder="ID"
        placeholderTextColor="#003f5c"
        onChangeText={(clientID) => setClientID(clientID)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(clientSecret) => setClientSecret(clientSecret)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Token"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(clientToken) => setClientToken(clientToken)}
        />
      </View>
      <Button title="Sign in" onPress={() => navigation.navigate('CanvasPersonalSignIn', { id: {clientID} , password: {clientSecret}, token: {clientToken}})} />
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
    backgroundColor: "ffff",
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
    backgroundColor: "#FF7F",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 25,
  }
});
