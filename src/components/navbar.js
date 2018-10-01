import React from 'react';
import './navbar.css';

export default function Navbar(props){
  return (
    <nav className="navbar">
      <p className="what"><strong>WHAT?</strong></p>
      <p className="new-game" onClick={() => props.newGame()}><strong>+NEW GAME</strong></p>
    </nav>
  )
}