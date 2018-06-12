import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='insta-follow'>
          <h3>FOLLOW ME ON INSTAGRAM</h3>
          <p className='insta-handle'>@GK_PHOTOGRAPHY</p>
        </div>
        <div className='bottom-section'>
          <div className='foot-title'>
              <h1>Gwen Keller Photography</h1>
            </div>
          <div>
            <div className='contact-info'>
              <p>
                <img className='icon' src='https://www.iconsdb.com/icons/preview/white/phone-18-xxl.png'/>
                719-555-4806
              </p>
              <p className='email'>
                <img className='icon' src='https://www.iconsdb.com/icons/preview/white/message-xxl.png'/>
                INFO@GKPHOTOGRAPHY.COM
              </p>
            </div>
            <p className='address'>
              1234 SOUTH MAIN STREET
              <img className='dot' src='https://www.iconsdb.com/icons/preview/white/circle-xxl.png'/>
              DENVER
              <img className='dot' src='https://www.iconsdb.com/icons/preview/white/circle-xxl.png'/>
              COLORADO
              <img className='dot' src='https://www.iconsdb.com/icons/preview/white/circle-xxl.png'/>
              80112
            </p>
          </div>
          <div className='social-media-icons'>
            <a href='https://www.instagram.com/gwenkeller/'><img className='media-icon' src='https://www.iconsdb.com/icons/preview/white/instagram-xxl.png' /></a>
            <a href='https://www.facebook.com/GwenKeller'><img className='media-icon' src='https://www.iconsdb.com/icons/preview/white/facebook-3-xxl.png' /></a>
            <a href='https://www.facebook.com/GwenKeller'><img className='media-icon' src='https://www.iconsdb.com/icons/preview/white/twitter-3-xxl.png' /></a>
          </div>
        </div>

      </div>
    );
  }
};

export default Footer;