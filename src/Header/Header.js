import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Gwen Keller Photography</h1>
        <div className='nav-links'>
          <NavLink to='/about' className='nav'>ABOUT</NavLink>
          <NavLink to='/portraits' className='nav'>PORTRAITS</NavLink>
          <NavLink to='/contact' className='nav'>CONTACT</NavLink>
        </div>
      </div>
    );
  }
};

export default Header;