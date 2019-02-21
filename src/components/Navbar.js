import React, { Component } from 'react';
import legend from '../legend.png';
import mega from '../mega.png';
import pokemon from '../pokemon.png';


const Navbar = props => {
    return (
        <header className="App-header">
                <img src={pokemon} className="App-logo" alt="logo" />
            
            <div className="filter-wrapper">
                <div onClick={props.filteredSearch} className="subtype-filter">
                    <img src={legend} alt="break" />
                    <p> LEGEND </p>
                </div>
                
                <div onClick={props.filteredSearch} className="subtype-filter">
                    <img src={mega} alt="mega" />
                    <p> MEGA </p>
                </div>
            </div>
            
            <form onSubmit={props.handleSubmit}>
                <input 
                    className="typeahead"
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