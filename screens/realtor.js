import React from 'react';
import {Text} from 'react-native';
import {Content, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Custom Realtor component
// The Home page updates the number of realtor everytime new datacomes in to firebase in real time
// Using Nativebase for designing

export default class Info extends React.Component {
    render(){
      return (
          <Content>
          <Card>
            <CardItem style={{backgroundColor: '#FFF3F1'}}>
              <Left>
                {/* Getting the props from the Home.js */}
                <Thumbnail source={{uri: this.props.Profile}} />
                <Body>
                    <Text>Company Address:</Text>
                  <Text>{this.props.Address}</Text>
                  <Text note>{this.props.City}</Text>
                </Body>
              </Left>

              <Right>
                  <Text>Company: {this.props.Company}</Text>
                  {/* OnPress go to a Different Page*/}
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}><Text style={{backgroundColor:"#FFF", padding: 10, borderRadius: 10,}}>Chat</Text></TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
        </Content>
      );
    }
}