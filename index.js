import { AppRegistry } from 'react-native';

import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

const numberRandom = () => {
  let numberRandom = Math.random();
  alert(numberRandom = Math.floor(numberRandom * 10));
};

const App = () => {
  return (
    <View>
      <Text> Meu Primeiro APP </Text>
      <Button
        title="Number Random"
        onPress={numberRandom}
      />
    </View>
  );
};

AppRegistry.registerComponent('NumberRandom', () => App);
