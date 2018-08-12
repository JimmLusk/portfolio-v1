
import React from 'react';
import './styles/Footer.css'

export default class Footer extends React.Component {

  render(){
    return (
      <footer className='site-footer'>
        {/* <div className='social-links'>
          
        </div> */}
        <div className='attribution'>
          Icons and Emoji from <a href="https://www.flaticon.com/authors/freepik">Freepik</a> and <a href="https://twemoji.twitter.com/">Twitter</a>
        </div>
        <div className='by-me'>Developed by Jimm Lusk  
          <img className='developer-emoji'
          src='https://twemoji.maxcdn.com/2/svg/1f468-1f3fd-200d-1f4bb.svg'
          alt='Man Technologist emoji'/> 2018
        </div>
      </footer>
    )
  }
}