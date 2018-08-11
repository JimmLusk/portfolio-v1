import React from 'react';
import './styles/Portfoliopage.css';
import Project from './Project';
import melata from '../img/melata.png'
import swedishfarmyard from '../img/swedishfarmyard.png';
import katchup from '../img/katchup.png';


class Portfoliopage extends React.Component {

  render() {
    return (
      <main className="portfolio">
        <h1>Projects</h1>
        <ul className='projects'>
          <li>
            <Project title={'Melata'} 
              description={`Melata is a MERN app built to teach programming. It features currated instructional videos along with an integrated code editor. Users can pick from and work through an assortment of "Paths" to learn web development.`}
              hero={melata}
              links={{live: 'https://melata-app.firebaseapp.com/', frontRepo: 'https://github.com/ThePaths/client', backRepo:'https://github.com/ThePaths/firebase-server'}}
              mainTechs={['React','Redux','Node.js', 'MongoDB', 'Express']}
              otherTechs={['REST','Passport.js','Firebase', 'Mongoose', 'JWT']}
              techString='React / Redux / Node.js / MongoDB / Express.js / REST / Passport.js / Firebase / JSON Web Token / Mongoose'/>
          </li>

          <li>
            <Project title={'Swedish Farm Yard'} 
              description={`A learning app that teaches user Swedish words for common animals. The server side uses a spaced repetition algorithm to choose the order the words will be displayed.`}
              hero={swedishfarmyard}
              links={{live: 'https://swedish-farmyard.herokuapp.com/', frontRepo: 'https://github.com/JimmLusk/Spaced-Repetition-Swedish-Farmyard-client', backRepo:'https://github.com/JimmLusk/Spaced-Repetition-Swedish-Farmyard-server'}}
              mainTechs={['React','Redux','Node.js', 'MongoDB', 'Express']}
              otherTechs={['REST','Passport.js','Heroku', 'Mongoose', 'JWT']}
              techString='React / Redux / Node.js / MongoDB / Express.js / REST / Passport.js / Heroku / JSON Web Token / Mongoose'/>
          </li>

          <li>
            <Project title={'KatchUp'} 
              description={`A pomodoro timer turned into a game by allowing the user to collect digital tomatoes by completing their timers. Uses JSON web tokens to securely let users create an account and login. Currently stil in progress.`}
              hero={katchup}
              links={{live: 'https://confident-torvalds-906f7b.netlify.com', frontRepo: 'https://github.com/JimmLusk/pomodoro-client', backRepo:'https://github.com/JimmLusk/pomodoro-type-beat-server'}}
              mainTechs={['React','Redux','Node.js', 'MongoDB', 'Express']}
              otherTechs={['REST','Passport.js','Heroku', 'Mongoose', 'JWT']}
              techString='React / Redux / Node.js / MongoDB / Express.js / REST / Passport.js / Heroku / Netlify / JSON Web Token / Mongoose'/>
          </li>
        </ul>
      </main>
    );
  }
}

export default Portfoliopage;