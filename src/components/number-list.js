import React from 'react';

export default function NumberList(props){
  const guesses = props.guesses.map((guess, index) => (
    <a className="previous-guess" key={index}>{guess}</a>
  ));
  return (
    <div className="number-list">{guesses}</div>
  )
}