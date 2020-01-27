import React, { Component } from 'react';
import './App.css';
//import TriesCount from './TriesCount';


const button = document.querySelector("#okButton");
const letterMasked = " _ ";
//const letters = ['A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'G ', 'H ', 'I ', 'J ', 'K ', 'L ', 'M ','N ', 'O ', 'P ', 'Q ', 'R ', 'S ', 'T ', 'U ', 'V ', 'W ', 'X ', 'Y ', 'Z'];

const words = ["MER",  "VOITURES", "DESTRUCTURATION"];

let word;
let maskedWord;



class App extends Component{

  constructor(props){
    super(props);
    this.verifyTheLetter = this.verifyTheLetter.bind(this);
    //choix du mot
    maskedWord = this.WordMasked();
    this.state={
      tries: 0,
      previousLettersChoosed: [],
      maskedWord : maskedWord
    }
  }

  WordMasked() {
    word = words[Math.floor(Math.random()*words.length)]; //choisir mot aléatoirement dans la liste
    //transforme string en tbaleau pour pouvoir utiliser le .map
    word = word.split("");
    maskedWord = word.map(currentLetter => currentLetter = letterMasked);
    return maskedWord;
  }

  verifyTheLetter(){
    const {tries, previousLettersChoosed}= this.state;
    let letterChoosed = document.getElementById("letterChoosed").value.toLocaleUpperCase();;
    let input;
    let newTries;
    let errorText;

    
    
    if (letterChoosed === "") {
      input = document.getElementById("letterChoosed");
      input.classList.add('errorInput');
      errorText = document.getElementsByClassName('errorMessage')[0];
      errorText.classList.remove("hidden");
    }
    else {
      input = document.getElementById("letterChoosed");
      input.classList.remove('errorInput');
      errorText = document.getElementsByClassName('errorMessage')[0];
      errorText.classList.add("hidden");
      
      if (word.includes(letterChoosed)) {
        
        alert("good choice");
        console.log(input.value)
        for (var i=0; i<word.length; i++){
          console.log(maskedWord[letterChoosed]);
        }
      }
      else {
        alert('bad choice');
        newTries = tries +1;
        console.log(newTries);
        this.setState({tries: newTries});
          
        }

      if (!previousLettersChoosed.includes(letterChoosed)) {
        previousLettersChoosed.push(letterChoosed);
        console.log(previousLettersChoosed);
      } else {

        alert("You've already chosen that letter! Choose an other.")
      }

      }
      //return this.state.word.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }


  render() {
    const { tries, maskedWord } = this.state; // recup le mot et l'affiche
    return (
      <div className="hangmanWord">

        {maskedWord}
        <br></br>
        <br></br>
        <div id="try">{tries}</div>

        <div className="letterChoice">
          <input id="letterChoosed" type="text" title="Choose an letter of the alphabet"></input>
          <div className="errorMessage hidden">You need to choose a letter</div>
          <button id="okButton" onClick={this.verifyTheLetter}>ok</button>
        </div>

      </div>

    )
  }


}

export default App;
