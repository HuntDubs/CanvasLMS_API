import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {WebView} from 'react-native-webview';


//Commented out sections from a scrapped email and password sign-in screen. Pretty sure that will not be needed
const SignInScreen = ({navigation}) => {
  // const [clientID, setClientID] = useState('');
  // const [clientSecret, setClientSecret] = useState('');
  return (
    <View style = {styles.container}>
      <View ><Text style={styles.inputView}>Sign-in to your Canvas!</Text></View>
      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="ClientID"
          placeholderTextColor="#003f5c"
          onChangeText={(clientID) => setClientID(clientID) }
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style = {styles.TextInput}
          placeholder="ClientSecret"
          placeHolderTextColer = "#003f5c"
          secureTextEntry={true}
          onChangeText={ (clientSecret) => setClientSecret(clientSecret)}
        />
      </View> */}
      <Button title="Sign in" onPress={() => navigation.navigate('CanvasWebSignIn')} />
    </View>
  );
}

const CanvasWebScreen = ({naviagtion}) => {
  authURL = 'https://login.ku.edu/login/oauth2/auth?client_id=19132~xIlMUq617UTOBA77teuBSUB9xR8YsvprRlh2pEC7LfuWvxOvytrTI49YDn7Hg0U0&response_type=code&redirect_uri=/login/oauth2/auth?code=';
  return (
    <WebView source={{ uri: authURL }}  />
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={SignInScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="CanvasWebSignIn" component={CanvasWebScreen} />
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
