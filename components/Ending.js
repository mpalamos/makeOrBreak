import * as React from 'react';
import {Button, Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default class Ending extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Card>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text> Results </Text>
        </View>
      <View style={styles.scoresContainer}>
          <View style={styles.makes}>
            <Text style={styles.paragraph} >
              Makes :)
              </Text>
                {this.props.makeScore.map(item =>
              <Text style={styles.text} >
                {item} </Text>)
              }
          </View>
          <View style={styles.breaks}>
            <Text style={styles.paragraph}>
              Breaks :(
            </Text>
              {this.props.breakScore.map(item =>
                (<Text style={styles.text} >
              {item}
            </Text>))
            }
          </View>
        </View>
        <View styles={styles.button}>
          <Button title={'Home'} onPress={this.props.onRestartGame}/>
        </View>
      </View>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: height,
    padding: 24,
  },
  breaks: {
    flex: 1
  },
  button: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  makes: {
    flex: 1
  },
  text: {
    fontSize: 13,
    margin: 2
  },
  top: {
    flex: .9
  },
  paragraph: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoresContainer: {
    flex: 0,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row'
  }
})
