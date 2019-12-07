import React, { Component } from 'react';
import {TextInput,StyleSheet,Text,View,TouchableOpacity,Image,Animated, Easing} from 'react-native';

import firebase from "./firebase";//importing firebase from a different folder

export default class LoginScreen extends Component {

  text1 = new Animated.Value(0)//making new animating

  componentDidMount()
  {
      Animated.timing(this.text1,{//simple easing animation
        toValue: 1,
        duration: 1000,
        easing: Easing.ease
      }).start()
  }

  constructor(props) {
    super(props);

    this.state = {//state for login in
      email: "",
      password: ""
    };
  }

  SignUp = (email, password) => {//signUp function
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => alert("Thank you! "+email))//creates user and alerts when its being done for sure
      .catch(error => {   
        alert(error.message);//if there is an error alert it
     })
    } catch (err) {
      alert("Error : ", err);//alert thhat goes into built in expo console, doesnt work without this line
    }
  };


  SignIn(email, password) {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => this.props.navigation.navigate('App'))//checks for user, if true goes to home page
      .catch(error => {   
        alert(error.message);//if there is an error alert it
     })
    } catch (error) {
      alert(error.toString(error));//alert thhat goes into built in expo console, doesnt work without this line
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* setting a background */}
      <Image source={require('../assets/Login.jpg')} style={{width: '100%', height: '100%', position: "absolute", top: 0, left: 0, resizeMode: 'cover'}} ></Image>
      {/* Animating grey background */}
      <Animated.View style={{...styles.background, opacity: this.text1}}></Animated.View>
      <Image source={require('../assets/logo-png-black.png')} style={{width: '50%', height: '50%', position: "absolute", top: "0%", resizeMode: 'contain' }}></Image>
      {/* setting email state when writing */}
        <TextInput
          onChangeText={email => this.setState({ email })}
          style={styles.placeholders1}
          placeholderTextColor={'#111111'}
          placeholder="Enter Email Here">
        </TextInput>

      {/* setting password state when writing */}
        <TextInput
          onChangeText={password => this.setState({ password })}
          style={styles.placeholders2}
          placeholder="Enter Password Here"
          placeholderTextColor={'#111111'}
          secureTextEntry={true}>
        </TextInput>


        {/* Onpress run Sign In function with current email and password */}
        <Animated.View style={styles.button_style1}>
          <TouchableOpacity style={styles.SubmitButtonStyle1} 
          onPress={() => this.SignIn(this.state.email, this.state.password)}>
            <Text style={styles.TextStyle}> Sign In </Text></TouchableOpacity>
        </Animated.View>
        {/* Onpress run Sign Up function with current email and password */}
        <Animated.View style={styles.button_style2}>
          <TouchableOpacity style={styles.SubmitButtonStyle2} 
            onPress={() => this.SignUp(this.state.email, this.state.password)}>
              <Text style={styles.TextStyle}> Sign Up </Text></TouchableOpacity>
        </Animated.View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')} style={styles.description} ><Text>Trouble signing in?</Text></TouchableOpacity>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: 0,
    alignItems: 'center',
    //putting everything in the middle
  },

  SubmitButtonStyle1: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#FF1811',
    borderRadius:25,
    borderWidth: 0,
    borderColor: '#fff',
  },

  SubmitButtonStyle2: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#FF894F',
    borderRadius:25,
    borderWidth: 0,
    borderColor: '#fff',
  },
  
  background:
  {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(233,233,233, 0.8)',
    // rgba for opacity
    position: 'absolute',
    alignSelf: 'center',
    top: '10%',
    borderBottomRightRadius: 200,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
  },

  button_style1: {
    width: '50%',
    position: 'absolute',
    alignSelf: 'center',
    top: '60%',
  },

  button_style2: {
    width: '50%',
    position: 'absolute',
    alignSelf: 'center',
    top: '67%',
  },

  button_text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'
  },
  
  placeholders1: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    padding: 10,
    width: '70%',
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
    borderRadius: 5,
    color: '#000000',
    borderBottomWidth: 1,
    borderColor: '#111111',
  },
  placeholders2: {
    color: '#000000',
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginBottom: 20,
    padding: 10,
    width: '70%',
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    borderBottomWidth: 1,
    borderColor: '#111111',
  },
  description: {
    fontSize: 14,
    padding: 30,
    position: 'absolute',
    alignSelf: 'center',
    top: '73%',
  },
  backgroundImage:{
    position: 'absolute',
    left: 0,
    top: 0,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});