import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';

const Navbar = props => {
   
    return (
        <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            
            <div className="filter-wrapper">
                <div onClick={props.filteredSearch} className="subtype-filter">
                    <img src={logo} alt="break" />
                    <p>LEGEND</p>
                </div>
                
                <div onClick={props.filteredSearch} className="subtype-filter">
                    <img src={logo} alt="mega" />
                    <p>MEGA</p>
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