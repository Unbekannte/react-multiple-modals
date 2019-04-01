import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { showAgeModal } from './Modals/showModalHelpers';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <button onClick={showAgeModal}>
            Показать модалку
          </button>
        </main>
      </div>
    );
  }
}

export default App;
