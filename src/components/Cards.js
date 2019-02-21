import React from 'react';
import Card from './Card';
import loader from '../loader.gif';

const Cards = props =>  (
    <div>
        <div className="card-container">
          {
            props.loading === false || undefined? 
            (
                props.cards.cards.map(card => {
                  return (
                    <div className="card" key={card.id}>
                      <Card card={card} />
                    </div>
                  )
                })
            ) 
            : 
            (
                <div className="loader">
                    <img src={loader} alt="loader"/>
                </div>
            )
          }
        </div>
    </div>
)

export default Cards;