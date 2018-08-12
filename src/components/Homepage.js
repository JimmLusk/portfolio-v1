
import React from 'react';
import './styles/Homepage.css';
import Project from './Project';
import melata from '../img/melata.png'
import github from '../img/github.svg'
import email from '../img/mail.svg'
import linkedin from '../img/linkedin.svg'

class Homepage extends React.Component {
  render() {
    return (
      <main className="home">
        <header className='page-header'>
          Hi <img className='waving-hand wave-animation'
          src='https://twemoji.maxcdn.com/2/svg/1f44b-1f3fc.svg'
          alt='waving hand emoji'/>, I'm Jimm.
        </header>
        <section className='self-description'>
          <p>
             I'm a full-stack JavaScript web application developer{/* and student of <a href='https://www.thinkful.com/' className='bounce-animation'>Thinkful's</a> "Engineering Immersion" program*/}. You can view my portfolio or learn more about me below. 
          </p>
        </section>
        <section className='info-links'>
          <a href='/portfolio' className='info-link'>Full Portfolio</a>
          <a href='/about' className='info-link'>About Me</a>
        </section>
        <section className='recent-projects'>
          <h2>A Recent Project</h2>
          <Project title={'Melata'} 
              description={`Melata is a MERN app built to teach programming. It features currated instructional videos along with an integrated code editor. Users can pick from and work through an assortment of "Paths" to learn web development.`}
              hero={melata}
              links={{live: 'https://melata-app.firebaseapp.com/', frontRepo: 'https://github.com/ThePaths/client', backRepo:'https://github.com/ThePaths/firebase-server'}}
              mainTechs={['React','Redux','Node.js', 'MongoDB', 'Express']}
              otherTechs={['REST','Passport.js','Firebase', 'Mongoose', 'JWT']}
              techString='React / Redux / Node.js / MongoDB / Express.js / REST / Passport.js / Firebase / JSON Web Token / Mongoose'/>
        </section>
        <section className='contact' id='contact'>
          <h2>Contact</h2>
          <p>Feel free to email me or send a message on LinkedIn.</p>
          <div className='contact-links'>
            <a href='mailto:ajameslusk@gmail.com'><img src={email} alt='email icon'/></a>
            <a href='https://github.com/JimmLusk'><img src={github} alt='github logo'/></a>
            <a href='https://www.linkedin.com/in/jimmy-lusk/'><img src={linkedin} alt='linkedin logo'/></a>
          </div>
        </section>
      </main>
    );
  }
}

export default Homepage;