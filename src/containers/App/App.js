import React from 'react';

import './App.scss';
import logo from '../../assets/images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/containers/App/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
