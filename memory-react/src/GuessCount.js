import PropTypes from 'prop-types';
import React from 'react';

import './GuessCount.css';

//destructure la prop
const GuessCount = ({guesses}) => <div className="guesses">{guesses}</div>


GuessCount.propTypes ={
    guesses: PropTypes.number.isRequired, //condition sur la prop guesses
}

export default GuessCount