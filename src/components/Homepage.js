
import React from 'react';
import './styles/Homepage.css';


class Homepage extends React.Component {
  render() {
    return (
      <main className="home">
        <header className='page-header'>
          Hi, <img className='waving-hand wave-animation'
          src='https://twemoji.maxcdn.com/2/svg/1f44b-1f3fc.svg'
          alt='waving hand emoji'/>, I'm Jimm.
        </header>
        <section className='self-description'>
          <p>
            I'm a fullstack developer and current student in <a href='https://www.thinkful.com/' className='bounce-animation'>Thinkful's</a> Engineering Immersion program. 
          </p>
          <p>
            You can view my portfolio or learn more about me below.
          </p>
        </section>
        <section className='info-links'>
          <a href='/portfolio' className='info-link'>Portfolio</a>
          <a href='/about' className='info-link'>About</a>
        </section>
        
      </main>
    );
  }
}

export default Homepage;