import React, { Component } from 'react';
import './App.css';


const button = document.querySelector("#okButton");
const letterMasked = " _ ";
const letters = ['A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'G ', 'H ', 'I ', 'J ', 'K ', 'L ', 'M ',
'N ', 'O ', 'P ', 'Q ', 'R ', 'S ', 'T ', 'U ', 'V ', 'W ', 'X ', 'Y ', 'Z'];

const words = ["BONJOUR", "VOITURE", "ORDINATEUR", "BANANE", "VACANCES",
"NOURRITURE", "TABLETTE", "BOUTEILLE", "DESTRUCTURATION"];

let word;
let maskedWord;
let tries = 0;



class App extends Component{
  constructor(props){
    super(props);
    this.verifyTheLetter = this.verifyTheLetter.bind(this);
  }
  
  

  WordMasked() {
    word = words[Math.floor(Math.random()*words.length)]; //choisir mot aléatoirement dans la liste
    //transforme string en tbaleau pour pouvoir utiliser le .map
    word = word.split("");
    maskedWord = word.map(currentLetter => currentLetter = letterMasked);
    return maskedWord;
  }

  verifyTheLetter(){
    let letterChoosed = document.getElementById("letterChoosed").value;
    let input;
    let errorText;

    if(letterChoosed === ""){
      input = document.getElementById("letterChoosed");
      input.classList.add('errorInput');
      errorText = document.getElementsByClassName('errorMessage')[0];
      errorText.classList.remove("hidden");
    }
    else{
      input = document.getElementById("letterChoosed");
      input.classList.remove('errorInput');
      errorText = document.getElementsByClassName('errorMessage')[0];
      errorText.classList.add("hidden");

      if(word.includes(input.value)){
        alert("good choice");
        console.log(input.value)
      }
      else{
        alert('bad choice');
      }
      

    }
    


  }


render(){
  return(
    <div className="hangmanWord">
      {this.WordMasked()}
      <br></br>
      <br></br>
      <div id="try">{`number of try: ${tries}`}</div>

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
