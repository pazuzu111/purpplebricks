

import React from 'react';
import loader from '../loader.gif';

const Card = props =>  {
    return (
        <div className="card">
            <img src={props.card.imageUrl} alt="pokemon"/>
        </div>
    )
}
  
export default Card
