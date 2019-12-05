import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Thumbnail } from 'native-base';

// Using Native Base



export default class App extends React.Component {

  onPressEvent() {
    Alert.alert('Your Message will be Sent soon...')
    // Alert on button press
  }

  render() {
    return (
    <View>
        
        <View style={styles.container}> 
            
            <Image source={require('../assets/Login.jpg')} style={styles.background}></Image>

            <Thumbnail source={{uri:'https://firebasestorage.googleapis.com/v0/b/webd303-ba508.appspot.com/o/images%2Fcraig-mckay-jmURdhtm7Ng-unsplash.jpg?alt=media&token=08311052-4613-4232-ab88-5d71fe1a9b29'}} style={{position:"absolute", top:'5%', zIndex: 1, alignItems: "center"}} />
            {/* Thumbnail is native base */}


            <Text style={styles.name}>Realtors Name</Text>
            
            <View style={styles.message}></View>
            <Text style={styles.message}>Hey, I wanted to know more about that house that you listed. Can we meet?</Text>
            <View style={styles.message2}></View>
            <Text style={styles.message2}>Yeah, for sure where?</Text>
            {/* Messages */}
                <View style={styles.input}>
                    <TextInput
                    placeholderTextColor={'#111111'}
                    placeholder="Enter Email Here"
                    ></TextInput>
                </View>
                <View style={styles.button}><TouchableOpacity onPress={this.onPressEvent} ><Text>Send</Text></TouchableOpacity></View>


        </View>
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
    flexDirection: 'row'
  },
  background:{
    width: '100%', 
    height: '100%', 
    position: "absolute", 
    top: 0, 
    left: 0, 
    resizeMode: 'cover', 
    zIndex: -1
  },
  name:{
    position:"absolute",
    top:'15%', 
    zIndex: 1, 
    alignItems: "center"
  },
  input:{
      position: "relative",
      top: "90%",
      width: "60%",
      backgroundColor: "#DDD",
      borderRadius: 30,
      padding: 5,
  },
  button:{
    position: "relative",
    top: "90%",
    width: '15%',
    padding: 10,
    marginLeft: 20,
    backgroundColor: "#CCC",
    borderRadius: 30,
    textAlign: 'center',
  },
  message:{
    position:"absolute", 
    top:'70%', 
    right:'5%', 
    height:70, 
    width:'50%', 
    backgroundColor:"rgba(233,233,233, 0.5)", 
    borderRadius: 15,
    padding: 7,
    paddingLeft: 15,
    lineHeight: 20
  },
  message2:{
    position:"absolute", 
    top:'80%', 
    left:'5%', 
    height:70, 
    width:'40%', 
    backgroundColor:"rgba(255,176,149, 0.5)", 
    borderRadius: 15,
    padding: 7,
    paddingLeft: 15,
    lineHeight: 20
  }
  
 
});
