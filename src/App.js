import React, { Component } from 'react';
import './App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <header>
            <div className="logo">
              salary calculator
            </div>

            <nav className="menu">
              <a href="/" className="main-btn">Sign Up</a>
            </nav>
          </header>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
