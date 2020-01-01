import React from 'react'

import './GuessCount.css'

//destructure la prop
const GuessCount = ({guesses}) => <div className="guesses">{guesses}</div>

export default GuessCount