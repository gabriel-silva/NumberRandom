import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  
  numberRandom(){
    alert(2);
  }

  render() {
    return (
      <View>
        <Text> oi </Text>
        <Button
          title="Number Random"
          onPress={this.numberRandom()}
        />
      </View>
    );
  }
}
