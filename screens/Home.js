import React, { Component } from 'react';
import { Image, Text, ScrollView } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Font, Apploading } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends Component {

 

  render() {
    return (
      <ScrollView>
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://timedotcom.files.wordpress.com/2018/01/stephanie-schriock-motto.jpg'}} />
                <Body>
                  <Text>Laura Wilson</Text>
                  <Text note>GoodLife Fitness</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://media1.popsugar-assets.com/files/thumbor/gNPMqznk7wYWIs_g8w9QWDeIg-c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/01/18/748/n/1922729/tmp_g13kI4_210fdc7e610ec25d_GettyImages-891326080.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>345 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>78 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg'}} />
                <Body>
                  <Text>Alex McGuire</Text>
                  <Text note>LA Fitness</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>424 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>177 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>2h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </ScrollView>
    );
  }
}