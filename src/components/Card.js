import React from 'react';
import { Link } from 'react-router-dom';

const Card = props =>  {
    return (
        <Link to={{ pathname: `/${props.card.id}`, state: { data: props.card }}} >
          <img src={props.card.imageUrl} alt="pokemon"/>
        </Link>
    )
}
  
export default Card
