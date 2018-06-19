import React, { Component } from 'react';
import './styles/App.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App d-flex h-100 mx-auto flex-column">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
