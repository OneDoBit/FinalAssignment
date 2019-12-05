import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,} from 'react-native';


export default class App extends React.Component {


  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.background}>
          {/* making the design */}
          <Text style={styles.profile}>Profile</Text>
          <View style={{borderRadius: "40", position: 'absolute', top: '30%', left: "50%"}}><Image style={styles.image} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/webd303-ba508.appspot.com/o/images%2Fcraig-mckay-jmURdhtm7Ng-unsplash.jpg?alt=media&token=08311052-4613-4232-ab88-5d71fe1a9b29'}} ></Image></View>
          <Text style={styles.name}>Sancho Gulio</Text>
          <Text style={styles.status}>Currently looking for a house</Text>
          <Text style={styles.budget}>Budget</Text>
          <Text style={styles.budget1}>550-770K</Text>
          <Text style={styles.location}>Location</Text>
          <Text style={styles.location1}>San Diego, CA</Text>
        </View>
        {/* on press switch to a different page */}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')} style={styles.chat}><Image source={require('../assets/Group2.png')} style={{width: "100%", height: "70%", resizeMode: 'contain' }} ></Image></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.chat2}><Image source={require('../assets/Group3.png')} style={{width: "100%", height: "70%", resizeMode: 'contain' }} ></Image></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Realtors')} style={styles.chat3}><Image source={require('../assets/Group4.png')} style={{width: "100%", height: "70%", resizeMode: 'contain' }} ></Image></TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(233,233,233, 0.8)',
  },
  chat:{
    position: 'absolute',
    alignSelf: 'center',
    top: '60%',
    width: "80%",
    height: "20%"
  },
  chat2:{
    position: 'absolute',
    alignSelf: 'center',
    top: '72%',
    width: "80%",
    height: "20%"
  },
  chat3:{
    position: 'absolute',
    alignSelf: 'center',
    top: '84%',
    width: "80%",
    height: "20%"
  },
  profile:{
    color: 'white',
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 30,
    top: '20%',
  },
  name:{
    color: 'white',
    position: "absolute",
    alignSelf: "center",
    fontSize: 20,
    top: "55%",
  },
  budget:{
    color: 'white',
    position: "absolute",
    fontSize: 15,
    top: "80%",
    left: "25%",
  },
  budget1:{
    color: 'green',
    position: "absolute",
    fontSize: 18,
    top: "85%",
    left: "21%",
  },
  location:{
    color: 'white',
    position: "absolute",
    fontSize: 15,
    top: "80%",
    left: "60%",
  },
  location1:{
    color: 'white',
    position: "absolute",
    fontSize: 18,
    top: "85%",
    left: "53%",
  },
  status:{
    color: 'white',
    position: "absolute",
    alignSelf: "center",
    fontSize: 15,
    top: "65%",
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    borderRadius: 150 / 2,//making image round
    overflow: "hidden",
  },
  cardLayoutView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraphHeading: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b31919',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  logo: {
    height: 180,
    width: 180,
    marginBottom: 20,
  },
  background:
  {
    width: '100%',
    height: '60%',
    backgroundColor: '#FFC7BE',
    position: 'absolute',
    alignSelf: 'center',
    top: '0%',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 1.0,
    shadowRadius: 15.62,
    elevation: 10,//making shadow actualy visible my elevating the shadow distance
  },
});