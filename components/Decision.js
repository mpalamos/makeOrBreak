import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default class Decision extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Card onPress={this.props.onDecision}>
      <View style={styles.container}>
        <Text style={styles.paragraph} >
          {this.props.choice}
        </Text>
      </View>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 900,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
