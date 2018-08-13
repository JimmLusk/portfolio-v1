
import React from 'react';
import './styles/Footer.css'
import aws from '../img/aws.svg'

export default class Footer extends React.Component {

  render(){
    return (
      <footer className='site-footer'>
        <div className='footer-contents-container'>
          {/* <div className='social-links'>
            
          </div> */}
          <div className='attribution'>
            Icons and Emoji from <a href="https://www.flaticon.com/authors/freepik">Freepik</a> and <a href="https://twemoji.twitter.com/">Twitter</a>
          </div>
          <div className='hosted-on'>
            <span>Hosted on</span><a href='https://aws.amazon.com' target='_blank'><img className='aws-logo' src={aws} alt='amazon web services'/></a>
          </div>
          <div className='by-me'>© 2018 Jimm Lusk  
            <img className='developer-emoji'
            src='https://twemoji.maxcdn.com/2/svg/1f468-1f3fd-200d-1f4bb.svg'
            alt='Man Technologist emoji'/>
          </div>
        </div>
      </footer>
    )
  }
}