import React from 'react';
import './navbar.css';

export default function Navbar(props){
  return (
    <nav className="navbar">
      <p className="what">WHAT?</p>
      <p className="new-game" onClick={() => props.newGame()}>+NEW GAME</p>
    </nav>
  )
}