import React from 'react';
import { Link } from 'react-router-dom';
import legend from '../legend.png';
import mega from '../mega.png';
import pokemon from '../pokemon.png';


const Navbar = props => {
    const handleSubmit = e => {
        e.preventDefault();
        let search = e.target.search.value;    
        props.handleSearch(search);
        e.target.search.value = '';
      }

    return (
        <header className="App-header">
            <img id="back" src={pokemon} alt="pokemon" style={{height: '10vh'}} onClick={() => props.handleSearch('')} />
            
            <div className="filter-wrapper">
                <div onClick={() => props.filterPokemon('legend')} className="subtype-filter">
                    <img src={legend} alt="break" />
                    <p> LEGEND </p>
                </div>
                
                <div onClick={() => props.filterPokemon('mega')} className="subtype-filter">
                    <img src={mega} alt="mega" />
                    <p> MEGA </p>
                </div>
            </div>
            
            <form onSubmit={e => handleSubmit(e)}>
                <input 
                    id="search"
                    type="search"
                    autoComplete="off" 
                    name="search" 
                    placeholder="Search for Pokemon..." 
                />
            </form>
        </header>
    )
}

export default Navbar