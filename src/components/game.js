import React from 'react';
import GameFeedback from './game-feedback';
import GameForm from './game-form';
import GuessNumber from './guess-number';
import NumberList from './number-list';
import Navbar from './navbar';
import './game.css';

export default class Game extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      feedback: 'Make your Guess!',
      guessNumber: 0,
      guessList: [],
      answer: Math.floor(Math.random()*100)
    }
  }

  resetGame(){
    this.setState({
      feedback: 'Make your Guess!',
      guessNumber: 0,
      guessList: [],
      answer: Math.floor(Math.random()*100)
    })
  }

  newGuess(guess){
    console.log(this.state.answer);
    if(isNaN(guess)){
      alert('Guess must be a number!')
    } 
    else if(this.state.guessList.includes(guess)){
      alert(`Already guessed: ${guess}!`);
    }
    else if(guess > 100){
      alert('Guess must be between 0 and 100');
    }
    else {
      const guessCount = this.state.guessNumber+1;
      this.setState({
        guessNumber: guessCount,
        guessList: [...this.state.guessList, guess]
      })
      this.guessFeedback(guess);
    }
  }

  guessFeedback(guess){
    const feedbackVar = this.state.answer - guess;
    if(feedbackVar === 0){
      this.setState({
        feedback: 'You Won! Click +New Game to play again!'
      })
    }
    else if(feedbackVar <= 10 && feedbackVar >= -10){
      this.setState({
        feedback: 'Hot!'
      })
    }
    else if(feedbackVar <= 20 && feedbackVar >= -20){
      this.setState({
        feedback: 'Warm!'
      })
    }
    else {
      this.setState({
        feedback: 'Cold!'
      })
    }
  }

  render(){
    return (
      <div className="app">
      <Navbar newGame={() => this.resetGame()}/>
      <h1>HOT or COLD</h1>
        <div className="game-board">
          <GameFeedback text={this.state.feedback} />
          <GameForm newGuess={guess => this.newGuess(guess)}/>
          <GuessNumber number={this.state.guessNumber} />
          <NumberList guesses={this.state.guessList} />
        </div>
      </div>
    )
  }
}