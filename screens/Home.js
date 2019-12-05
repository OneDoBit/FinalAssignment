import React, { Component } from 'react';
import { ScrollView } from "react-native";
import firebase from "./firebase";
import Info from './info';
import { YellowBox } from 'react-native';
import _ from 'lodash';
//removing warning coming from firebase

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
//removing warning coming from firebase

export default class HomeScreen extends Component {

  houseDatabase = firebase.database().ref('house');
  // getting the firebase database 

  state = {
    houses:{}
  }
  // making state for firebase object


  componentDidMount(){
    this.houseDatabase.on('value', house  =>{
      const houseJSON = house.val();
      this.setState({houses:houseJSON === null ? {}:houseJSON})
    })
  }
  //if "mounted" search through the json

  

  render() {
    return (
      <ScrollView>
      {
        Object.values(this.state.houses).map(( info, index) =>//getting values from object that I got from firebase and passing it into the house component
            <Info 
              key={index}
              Address={info.Address}
              City={info.City}
              Profile={info.Profile}
              Image={info.Image}//names of the properties
              Views={info.Views}
              Impre={info.Impre}
              Price={info.Price}>
            </Info>
          )
        }
      </ScrollView>
    );
  }
}