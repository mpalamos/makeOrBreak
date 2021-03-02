/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// You can import from local files
import Question from './components/Question';
import Decision from './components/Decision';
import Ending from './components/Ending';
import Start from './components/Start';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Card } from 'react-native-paper';

const makeOrBreakQuestions = [
  'Name 3 places you would like to travel to?',
  'Describe your worst date?',
  'Name 3 of your all time favorite songs',
  'How do you cope when you feel sad or depressed',
  'How do you feel about vegans',
  'Toilet Paper: Over or under?',
  'Are you usually the little or big spoon?',
];

class App extends React.Component {
  state = {
    questionList: makeOrBreakQuestions.slice(),
    breakScore: [],
    makeScore: [],
    question: '',
    questionCount: 0,
    component: 'start'
  }
  render() {

  const {
    breakScore,
    choice,
    component,
    makeScore,
    question,
    questionCount,
    questionList
    } = this.state;
  const componentLibrary = {
      start: <Start onStart={this._onStartGame.bind(this)}/>,
      question: <Question
        question={question}
        onAnswer={this._onAnswerQuestion.bind(this)}
        onMakeOrBreak={this._onMakeOrBreak.bind(this)}
        questionCount={questionCount}
        questionLength={questionList.length}
        />,
      decision: <Decision
        choice={choice}
        onDecision={this._onDecision.bind(this)}/>,
      endGame: <Ending
        breakScore={breakScore}
        makeScore={makeScore}
        onRestartGame={this._onRestartGame.bind(this)}
    />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        <View style={styles.container}>
            {componentLibrary[component]}
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

  _onAnswerQuestion() {
    this.setState({component: 'makeOrBreak'})
  }

  _onGenerateQuestion() {
    const {questionList, count} = this.state;
    const question = questionList[questionCount++];
    this.setState({question: question})
  }

  _onDecision() {
    if (this.state.questionList.length < 0) {
         this.setState({decision: false, endGame: true})
    } else {
      this.setState({
        component: 'question',
        decision: false})
    }
  }

 _onMakeOrBreak(choice) {
    //grab the question add to make list add to make score
    const {questionCount, questionList} = this.state;
    let makeScore = this.state.makeScore.slice();
    let breakScore = this.state.breakScore.slice();
    if (choice === 'Make') {
      makeScore.push(this.state.question);
    } else {
      breakScore.push(this.state.question);
    }
    this.setState(
      {
      choice: choice, questionState: false,
      decision: true,
      component: 'decision',
      breakScore: breakScore,
      makeScore: makeScore
    },
    this._newQuestion)
  }

   _onStartGame() {
    const {questionList, questionCount} = this.state;
    this.setState({
      component: 'question',
      question: questionList[questionCount]
    })
  }

  _newQuestion() {
    const {questionList, questionCount} = this.state;
    if (questionCount >= questionList.length - 1) {
        this.setState({component: 'endGame'})
        return
     }
    let newCount = questionCount;
    newCount += 1;
    const newQuestion = questionList[newCount];
    this.setState({question: newQuestion, questionCount: newCount})
  }

  _onRestartGame() {
    this.setState({
      component: 'question',
      questionList: makeOrBreakQuestions.slice(),
      questionCount: 0,
      breakScore: [],
      makeScore: []
    })
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
