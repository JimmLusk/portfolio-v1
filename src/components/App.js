//eslint-disable import/first

import React from 'react';
import {Route, withRouter} from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';

import './styles/App.css'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <section className='content-wrapper'>
        <Header />
        <Route exact path='/' component={Homepage} />
        </section>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);