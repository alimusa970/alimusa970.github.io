import React from 'react';
import logo from './Ali.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Syed Musa Ali and I am for sure going to Master React!!!
        </p>
        <a
          className="App-link"
          href="https://github.com/alimusa970"
          target="_blank"
          rel="noopener noreferrer">
           Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
