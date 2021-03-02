import * as React from 'react';
import {Button, Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default class Start extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          MAKE OR
        </Text>
        <Text style={styles.paragraph}>
          BREAK
        </Text>
        <Button title={'Start Game'} onPress={this.props.onStart}/>
        <Button title={'How To Play'} onPress={this.props.onStart}/>
      </View>
    );
  }
}

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: ScreenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  paragraph: {
    justifyContent: 'center',
    margin: 24,
    marginTop: 0,
    fontFamily: 'DINNextRoundedLTPro-Bold',
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
