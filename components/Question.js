import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Question extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
  const {questionCount, questionLength} = this.props;
  return (
    <Card>
      <View style={styles.container}>
        <TouchableOpacity style={styles.make} onPress={() => this.props.onMakeOrBreak('Make')}>
          <Text>
            Make
          </Text>
        </TouchableOpacity>
          <Text style={styles.paragraph}>
            {this.props.question}
          </Text>
          <Text style={styles.questions}>
            [question: {questionCount + 1 ?? 0 }/{questionLength ?? 0}]
          </Text>
        <TouchableOpacity style={styles.break} onPress={() => this.props.onMakeOrBreak('Break')}>
          <Text>
            Break
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    padding: 24,
    width: width
  },
  break: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 80,
    width: 212,
    position: 'absolute',
    bottom: 90
  },
  paragraph: {
    margin: 18,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questions: {
    fontSize: 11,
  },
  make: {
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    height: 80,
    width: 212,
  },
});
