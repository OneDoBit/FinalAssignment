import React, { Component } from 'react';
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { BottomTabBar } from 'react-navigation-tabs';

export default class LoginScreen extends Component {

  state = { user: '', pass: undefined } // initialize our default state values...try some different default values: '', 3, undefined, null

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require('../assets/logo.png')}
          style={{ width: 200, height: 200, marginVertical: 40, }}
        />



        <TextInput // Username Enter
          onChangeText={
            // update the user states value
            text => this.setState({ user: text })
          }
          style={styles.placeholders}
          placeholder="Enter Username Here"></TextInput>


        <TextInput // Password Enter
          onChangeText={
            text => this.setState({ pass: text })
          }
          style={styles.placeholders}
          placeholder="Enter Password Here"
          secureTextEntry={true} // hide text when entering password <---
        ></TextInput>


        <View style={styles.button_style}>
          <Button color="#b31919" onPress={
            () => this.props.navigation.navigate('App')
          }
            style={styles.button_text}
            title="Login"
          />
        </View>

        <Text style={styles.description} >Trouble signing in?</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: -100,
    alignItems: 'center'

  },

  button_style: {
    marginTop: 50,
    width: '50%'
  },

  button_text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'

  },
  placeholders: {
    backgroundColor: '#353535',
    marginBottom: 20,
    padding: 10,
    width: '80%'
  },
  description: {
    fontSize: 14,
    padding: 30,
  },
});