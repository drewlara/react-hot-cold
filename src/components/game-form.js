import React from 'react';

export default class GameForm extends React.Component{
  constructor(props){
    super(props);
  }

  onSubmit(event){
    event.preventDefault();
    const guess = this.guessInput.value.trim();
    this.props.newGuess(guess);
  }

  render(){
    return (
      <form className="game-form" onSubmit={event => this.onSubmit(event)}>
        <input maxLength="3" type="text" ref={input => this.guessInput = input} placeholder="Enter your guess" required />
        <button type="submit">Guess</button>
      </form>
    );
  }
}