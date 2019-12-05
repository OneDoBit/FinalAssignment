import React, { Component } from 'react';
import {ScrollView } from "react-native";
import firebase from "./firebase";
import Realtor from './realtor';
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

  realtorDatabase = firebase.database().ref('realtor');
  // getting the firebase database 


  state = {
    realtor:{}
  }
  // making state for firebase object


  componentDidMount(){
    this.realtorDatabase.on('value', realtor  =>{
      const realtorJSON = realtor.val();
      this.setState({realtor:realtorJSON === null ? {}:realtorJSON})
    })
  }

    //if "mounted" search through the json

  

  render() {
    return (
      <ScrollView style={{"top": 50}}>
      {
        Object.values(this.state.realtor).map(( realtor, index) =>//getting values from object that I got from firebase and passing it into the house component
            <Realtor 
              key={index}
              Address={realtor.Address}
              City={realtor.City}
              Profile={realtor.Profile}
              Company={realtor.Company}//names of the properties
              navigation={this.props.navigation}>
                {/* passing navigation through the child component, since it would work without passing it this way. */}
            </Realtor>
          )
        }
      </ScrollView>
    );
  }
}