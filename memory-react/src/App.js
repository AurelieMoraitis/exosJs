import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  render() {
    return (<div className="memory">
      <GuessCount guesses={0}></GuessCount>
      <Card card="😀" feedback="hidden"></Card> {/*card prend le symbol '? par defaut --card.js */}
      <Card card="🎉" feedback="justMatched"></Card> {/*vient de compléter paire avec succès */}
      <Card card="💖" feedback="justMisMatched"></Card> {/*vient de compléter paire mais elle est fausse */}
      <Card card="🎩" feedback="visible"></Card> {/*paire déjà complétée avec succès */}
      <Card card="🐶" feedback="hidden"></Card> {/*paire déjà complétée avec succès */}
      <Card card="🐱" feedback="justMatched"></Card> {/*paire déjà complétée avec succès */}
    </div>
    )
  }
}

export default App