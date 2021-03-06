import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <NavLink to='/' className='title'>Gwen Keller Photography</NavLink>
          <div className='nav-links'>
            <NavLink to='/about' className='nav'>ABOUT</NavLink>
            <NavLink to='/portraits' className='nav'>PORTRAITS</NavLink>
            <NavLink to='/contact' className='nav'>CONTACT</NavLink>
          </div>
          <div className='social-media-icons'>
            <a href='https://www.instagram.com/gwenkeller/'><img className='media-icon' src='https://www.iconsdb.com/icons/preview/white/instagram-xxl.png' /></a>
            <a href='https://www.facebook.com/GwenKeller'><img className='media-icon' src='https://www.iconsdb.com/icons/preview/white/facebook-3-xxl.png' /></a>
            <a href='https://www.facebook.com/GwenKeller'><img className='media-icon' src='https://www.iconsdb.com/icons/preview/white/twitter-3-xxl.png' /></a>
          </div>
        </div>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </div>
      </div>
    );
  }
};

export default Header;