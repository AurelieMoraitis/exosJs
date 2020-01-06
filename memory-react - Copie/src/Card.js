import PropTypes from 'prop-types';
import React from 'react';

import './Card.css';

const HIDDEN_SYMBOL = '❓';

//props -card:type du symbole  -feedback:affichage de ce symbole
const Card = ({card, feedback, index,  onClick}) => (
   //donne style != en fct de feedback
   //expression JSX pour contenu dynamique --permet d'avoir card + valeur de feedback
    <div className={`card ${feedback}`} onClick={()=> onClick(index)}> 
        <span className="symbol">
            {/*si la card est hidden, on lui attribue ce symbol */}
            {feedback === 'hidden' ? HIDDEN_SYMBOL:card}
        </span>
    </div>
)

Card.propTypes={
    card: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'hidden',
        'justMatched',
        'justMisMatched'
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Card