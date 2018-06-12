import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Gwen Keller Photography</h1>
        <div>
          <NavLink to='/about' className='nav'>About</NavLink>
          <NavLink to='/portraits' className='nav'>Portraits</NavLink>
          <NavLink to='/contact' className='nav'>Contact</NavLink>
        </div>
      </div>
    );
  }
};

export default Header;