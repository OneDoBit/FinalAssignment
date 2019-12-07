//Forgot Password Page

import React from 'react';
import { StyleSheet, Text, View, Image, Animated, TextInput, TouchableOpacity, Alert, } from 'react-native';

export default class ForgotPassword extends React.Component {

  onPressEvent() {
    Alert.alert('This function is still in works')
  }

  render() {
    return (
      <View style={styles.container}>

        {/* setting a background */}
        <Image source={require('./assets/Login.jpg')} style={{ width: '100%', height: '100%', position: "absolute", top: 0, left: 0, resizeMode: 'cover' }} ></Image>

        {/* setting a grey box */}
        <Animated.View style={{ ...styles.background, opacity: this.text1 }}></Animated.View>

        {/* setting a Logo */}
        <Image source={require('./assets/logo-png-black.png')} style={{ width: '40%', height: '40%', position: "absolute", top: "0%", resizeMode: 'contain' }}></Image>

        {/* name text input */}
        <TextInput
          style={styles.nameInput}
          placeholderTextColor={'#111111'}
          placeholder="Your Name Here">
        </TextInput>

        {/* email text input */}
        <TextInput
          style={styles.emailInput}
          placeholderTextColor={'#111111'}
          placeholder="Your Email Here">
        </TextInput>

        {/* password text input */}
        <TextInput
          style={styles.passInput}
          placeholderTextColor={'#111111'}
          placeholder="New Password Here">
        </TextInput>

        {/* confirm text input */}
        <TextInput
          style={styles.passCoInput}
          placeholderTextColor={'#111111'}
          placeholder="Confirm New Password Here">
        </TextInput>

        {/* recover btn */}
        <Animated.View style={styles.button_style1}>

          <TouchableOpacity style={styles.SubmitButtonStyle1}>

            <Text style={styles.TextStyle} onPress={this.onPressEvent}> Recover Pasword </Text>
          </TouchableOpacity>

        </Animated.View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.description} ><Text>Go Back</Text></TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: 0,
    alignItems: 'center',
  },

  description: {
    fontSize: 14,
    padding: 30,
    position: 'absolute',
    alignSelf: 'center',
    top: '73%',
  },

  background: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(233,233,233, 0.8)',
    position: 'absolute',
    alignSelf: 'center',
    top: '10%',
    borderBottomRightRadius: 200,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },

  nameInput: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    padding: 10,
    width: '70%',
    position: 'absolute',
    alignSelf: 'center',
    top: '30%',
    borderRadius: 5,
    color: '#000000',
    borderBottomWidth: 1,
    borderColor: '#111111',
  },

  emailInput: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    padding: 10,
    width: '70%',
    position: 'absolute',
    alignSelf: 'center',
    top: '37%',
    borderRadius: 5,
    color: '#000000',
    borderBottomWidth: 1,
    borderColor: '#111111',
  },

  passInput: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    padding: 10,
    width: '70%',
    position: 'absolute',
    alignSelf: 'center',
    top: '44%',
    borderRadius: 5,
    color: '#000000',
    borderBottomWidth: 1,
    borderColor: '#111111',
  },

  passCoInput: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    padding: 10,
    width: '70%',
    position: 'absolute',
    alignSelf: 'center',
    top: '51%',
    borderRadius: 5,
    color: '#000000',
    borderBottomWidth: 1,
    borderColor: '#111111',
  },

  button_style1: {
    width: '50%',
    position: 'absolute',
    alignSelf: 'center',
    top: '65%',
  },

  SubmitButtonStyle1: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FF1811',
    borderRadius: 25,
    borderWidth: 0,
    borderColor: '#fff',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },

});
