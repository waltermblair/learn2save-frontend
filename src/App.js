import React from 'react';
import Account from './components/Account.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  // TODO - login screen
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Account />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
