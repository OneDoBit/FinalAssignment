import React from 'react';
import { Text, Image } from 'react-native';
import { Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

// Custom Houses component
// The Home page updates the number of houses everytime new datacomes in to firebase in real time
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
                  <Text>{this.props.Address}</Text>
                  <Text note>{this.props.City}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{backgroundColor: '#FFF3F1'}}>
              <Image source={{uri: this.props.Image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{backgroundColor: '#FFF3F1'}}>
              <Left>
                <Button transparent>
                  <Icon style={{color:"#DDD"}} name="eye" />
                  <Text>{this.props.Views}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon style={{color:"#DDD"}} name="thumbs-up" />
                  <Text>{this.props.Impre} Impressions</Text>
                </Button>
              </Body>
              <Right>
                <Text>${this.props.Price}</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      );
    }
}