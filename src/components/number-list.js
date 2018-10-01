import React from 'react';

export default function NumberList(props){
  const guesses = props.guesses.map((guess, index) => (
    <p className="previous-guess" key={index}>{guess}, </p>
  ));
  return (
    <div className="number-list">{guesses}</div>
  )
}