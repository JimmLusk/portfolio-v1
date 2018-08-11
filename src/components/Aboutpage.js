import React from 'react';
import './styles/Aboutpage.css';
import avi from '../img/avi-square.jpg';
import location from '../img/location.svg';
import laptop from '../img/laptop.svg';
import user from '../img/user.svg';
import ribbon from '../img/recommendation.svg';


class Aboutpage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected : undefined,
    }
  }

  render() {
    return (
      <main className="about-page">
        <section className='intro'>
          <img alt='avi' className='avi' src={avi}/>
          <div className="details">
            <h2 id='name'><img src={user} alt="person"/> Jimm Lusk</h2>
            <h2><img src={location} alt="location"/> Southern Maryland</h2>
            <h2><img src={laptop} alt="job"/> Web App Developer</h2>
          </div>
        </section>
        <section className='skills'>
          <h2>Skills</h2>
          <div className='skills-lists-cotainer'>
          <div className='frontend skills-list'>
            <h3>Frontend</h3>
            <ul>
              <li>JQuery</li>
              <li>React</li>
              <li>Redux</li>
              <li>Angular 4</li>
            </ul>
          </div>
          <div className='backend skills-list'>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>RESTful</li>
            </ul>
          </div>
          <div className='deploy skills-list'>
            <h3>Deploying/Testing</h3>
            <ul>
              <li>Mocha & Chai</li>
              <li>Firebase</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div className='other skills-list'>
            <h3>Misc.</h3>
            <ul>
              <li>Git & Github</li>
              <li>Photoshop CC</li>
              <li>Illustrator CC</li>
            </ul>
          </div>
          </div>
        </section>
        <section className="recs">
          <h2>Recommendations</h2>
          <article className="rec">
            <img src={ribbon} alt="ribbon"/>
            <div>
              <p className="rec-body">Working with Jimm was fantastic. He has a great understanding of to put a project together. Being a positive force on our development team, Jimm designed and implemented our API to be fast and comprehensible, while keeping our data structure, that was constantly changing, intact. Jimm is an Intelligent Developer who is team ready!</p>
              <p className="rec-credit">-Dameon Mendoza @ <span ><a href="https://www.dameonmendoza.com/">dameonmendoza.com</a></span></p>
            </div>
          </article>
          <article className="rec">
            <img src={ribbon} alt="ribbon"/>
            <div>
              <p className="rec-body">I had the pleasure of working with Jimmy on multiple projects. I've seen first-hand not only how good of a programmer Jimmy is, but also how much of a team-player he is. He demonstrated great communication skills and an ability to be confident and decisive under challenging circumstances. I can attest personally to Jimmy's competency with early stage project preparation, designing, wire framing, task splitting, front-end development, back-end development, project deployment, and testing. I have no doubts Jimmy would be a great asset to any company.</p>
              <p className="rec-credit">-Terrance Corley @ <a href="https://terrancecorley.com/about.html">terrancecorley.com</a></p>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default Aboutpage;