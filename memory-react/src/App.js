import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from './HallOfFame'

const SIDE = 6;
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿';
const VISUAL_PAUSE_MSECS = 750;

class App extends Component {

  //state = "";

  constructor(props){
    console.log("**debut construscteur")
    super(props);
    
    this.handleCardClick = this.handleCardClick.bind(this);

    this.state= {
      cards: this.generateCards(),
      currentPair: [],
      guesses: 0,
      matchedCardIndices: []
    }
    console.log("**fin construscteur")
  }

  generateCards() {
    const result = [];
    const size = SIDE * SIDE; //hauteur * largeur
    const candidates = shuffle(SYMBOLS); // melange les symboles
    while (result.length < size) {
      const card = candidates.pop();
      result.push(card, card)
    }
    //Result contient 36 symboles
    return shuffle(result);
  }

  //permet de garder la même valeur
  handleCardClick = index => {
    const {currentPair,matchedCardIndices} = this.state;

    if(matchedCardIndices.includes(index)){
      alert("Carte deja gagnée")
    }
    else if(currentPair[0]==index){
      alert("Choisi une deuxième carte DIFFERENTE !");
    }
    else if (currentPair.length === 0){
      this.setState({currentPair:[index]});
    }else if (currentPair.length === 1){
      this.handleNewPairCloseBy(index);
    }
  }

  handleNewPairCloseBy(index){
    const {cards, currentPair, guesses, matchedCardIndices} = this.state;
    const newPair = [currentPair[0],index];
    const newGuesses = guesses +1;
    const matched = cards[newPair[0]] === cards[newPair[1]];

    this.setState({currentPair: newPair, guesses: newGuesses});

    if (matched){
      this.setState({matchedCardIndices: [...matchedCardIndices, ...newPair]});
    }
    setTimeout( //affiche les pair pendant 3/4 de sec
      () => this.setState({currentPair: []}), 
      VISUAL_PAUSE_MSECS);
  }

  getFeedbackForCard(index){
    const {currentPair, matchedCardIndices} = this.state;
    const indexMatched = matchedCardIndices.includes(index); //contient les ancinne carte affichées
    let res = "";

    if (currentPair.length<2){ // Quand une carte ou zero est choisie
      res= (indexMatched || index === currentPair[0]) ? 'visible':'hidden'; 
    }
    else if(currentPair.includes(index)){ //Si deux carte on été choisies
      res= indexMatched? 'justMatched':'justMisMatched';
    }else{ //Si carte était deja visible
      res = indexMatched? 'visible':'hidden';
    }

    return res;
  }

  render() { // appelé lors du init et quand setState
    const {cards, guesses, matchedCardIndices} = this.state; //Descturation
    const won = matchedCardIndices.length === cards.length;
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        
        {/*itération automatique*/}
        {cards.map((currentCard, index )=> (
          <Card
            card={currentCard}
            feedback={this.getFeedbackForCard(index)}
            index = {index}
            key = {index} //Chaque element needs a key
            onClick={this.handleCardClick} >
          </Card>
        ))}


        {/*//itération manuelle
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card card="💖" feedback="justMisMatched" onClick={this.handleCardClick} />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} /> */}
        
        {won && <HallOfFame entries={FAKE_HOF}></HallOfFame>}
      </div>
    )
  }
}

export default App