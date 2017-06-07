import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

export  class Greetings extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Text>Yo {this.props.name}</Text>
    );
  }
}

export default class LotsOfGreetings extends Component{
  render(){
    return (
      <View style={{alignItems: 'center', paddingVertical: 50}}>
        <Greetings name="Bob"></Greetings>
        <Greetings name='Ross'></Greetings>
        <Greetings name='Karen'></Greetings>
        <Greetings name='Josh'></Greetings>
        <Greetings name='Toby'></Greetings>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('LotsOfGreetings', () => Bananas);