import React, { Component } from 'react';
import './App.css';


const letterMasked = " _ ";
let tries = 0;
const letters = ['A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'G ', 'H ', 'I ', 'J ', 'K ', 'L ', 'M ',
'N ', 'O ', 'P ', 'Q ', 'R ', 'S ', 'T ', 'U ', 'V ', 'W ', 'X ', 'Y ', 'Z'];
const words = ["BONJOUR", "VOITURE", "ORDINATEUR", "BANANE", "VACANCES", "NOURRITURE", "TABLETTE", "BOUTEILLE", "DESTRUCTURATION"];
const word = words[Math.floor(Math.random()*words.length)]; //choisir mot aléatoirement dans la liste



class App extends Component{
  
  
  

  WordMasked(word) {
    //transforme string en tbaleau pour pouvoir utiliser le .map
    word = word.split("");
    word = word.map(currentLetter => currentLetter = letterMasked);
    return word;
  }


render(){
  return(
    <div className="hangmanWord">
      {this.WordMasked(word)}
      <div className="letters">
        {letters}
      </div>

    </div>

  )
}


}

export default App;
