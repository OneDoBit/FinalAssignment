import React from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Text, View, StyleSheet, Button, Image } from 'react-native';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      shoot: false,
    };
  }

  componentDidMount() {
    //Time out to fire the cannon
    setTimeout(() => {
      this.setState({ shoot: true });
    }, 1000);
  }

  _handlePress() {
    //To fire cannon timer
    this.setState({ shoot: false });
    setTimeout(() => {
      this.setState({ shoot: true });
    }, 1000);
  }


  render() {
    return (
      <View style={styles.Container}>

        <View style={styles.cardLayoutView}>
          <Text style={styles.paragraphHeading}>CONGRATULATIONS</Text>
          <Text style={styles.paragraph}>You will receive 5 FREE Training Sessions</Text>
          <Image style={styles.logo} source={{ uri: 'https://media1.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif' }} />
          <Button
            onPress={() => this._handlePress()}
            title="Claim Your FREE Sessions Now"
            color="#b31919"
            accessibilityLabel=""
          />
        </View>

        {this.state.shoot ? (
          <ConfettiCannon count={200} explosionSpeed={350} origin={{ x: -10, y: 10 }} />
        ) : null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  logo: { // gif max 200
    height: 180,
    width: 180,
    marginBottom: 20,
  },
});