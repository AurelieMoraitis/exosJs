import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

//props -card:type du symbole  -feedback:affichage de ce symbole
const Card = ({card, feedback}) => (
   //donne style != en fct de feedback
   //expression JSX pour contenu dynamique --permet d'avoir card + valeur de feedback
    <div className={`card ${feedback}`}> 
        <span className="symbol">
            {/*si la card est hidden, on lui attribue ce symbol */}
            {feedback === 'hidden' ? HIDDEN_SYMBOL:card}
        </span>
    </div>
)

export default Card