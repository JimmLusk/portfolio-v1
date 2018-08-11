//eslint-disable import/first

import React from 'react';
import {Route, withRouter} from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import Footer from './Footer';
import Portfoliopage from './Portfoliopage';

import './styles/App.css'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <section className='content-wrapper'>
        <Header />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={Aboutpage} />
        <Route exact path='/portfolio' component={Portfoliopage} />
        </section>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);