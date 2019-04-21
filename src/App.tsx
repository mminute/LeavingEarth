import * as React from 'react';
import './App.css';
import Graph from './Graph/Graph';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    const gameBoard = new Graph({
        'A': { 'B': 0, 'C': 0 },
        'B': { 'A': 0, 'C': 1 },
        'C': { 'A': 0, 'B': 1 },
      });

      window.console.log(gameBoard.getGraph());

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
