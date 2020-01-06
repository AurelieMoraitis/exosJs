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
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: []

  }

  /*constructor(props){
    super(props);
    this.handleCardClick = this.handleCardClick.bind(this);
  }*/

  generateCards() {
    const result = [];
    const size = SIDE * SIDE;
    const candidates = shuffle(SYMBOLS);
    while (result.length < size) {
      const card = candidates.pop();
      result.push(card, card)
    }
    return shuffle(result);
  }

  //permet de garder la même valeur
  handleCardClick = index => {
    const {currentPair} = this.state;

    if (currentPair.length === 2){
      return
    }

    if (currentPair.length === 0){
      this.setState({currentPair:[index]});
      return
    }

    this.handleNewPairCloseBy(index);
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
    setTimeout(() => this.setState({currentPair: []}), VISUAL_PAUSE_MSECS);
  }

  getFeedbackForCard(index){
    const {currentPair, matchedCardIndices} = this.state;
    const indexMatched = matchedCardIndices.includes(index);

    if (currentPair.length<2){
      return indexMatched || index === currentPair[0]? 'visile':'hidden'; //la paire reste visible 3/4 de seconde
    }

    if(currentPair.includes(index)){
      return indexMatched? 'justMatched':'justMisMatched';
    }

    return indexMatched? 'visible':'hidden';
  }

  render() {
    const {cards, guesses, matchedCardIndices} = this.state;
    const won = matchedCardIndices.length === cards.length;
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        
        {/*itération automatique*/}
        {cards.map((card, index )=> (
          <Card
            card={card}
            feedback={this.getFeedbackForCard(index)}
            index = {index}
            key={index}
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