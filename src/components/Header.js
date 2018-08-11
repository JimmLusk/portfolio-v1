//eslint-disable import/first

import React from 'react';
import './styles/Header.css'

export default class Header extends React.Component {

  render(){
    return (
      <header className='site-header'>
        <div className='header-background'>
          <div className='header-back-1'></div>
          <div className='header-back-2'></div>
          <div className='header-back-3'></div>
          <div className='header-back-4'></div>
        </div>
        <nav className='header-nav'>
          <a href='/' className='site-title'><h1>Jimm Lusk</h1></a>
          <a href='/portfolio' className='portfolio-nav nav-link'>Portfolio</a>
          <a href='/about' className='about-nav nav-link'>About</a>
          <a href='/#contact' className='contact-nav nav-link'>Contact</a>
        </nav>
      </header>
    )
  }
}