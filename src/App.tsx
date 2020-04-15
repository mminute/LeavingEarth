import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import { IStoreState } from './redux/types/index';
import Graph from './Graph/Graph';

interface IProps { gameBoard: Graph };

class App extends React.Component<IProps> {
  public render() {
    window.console.log('App connected to store', this.props.gameBoard);

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

function mapStateToProps({ gameBoard }: IStoreState) {
  return {
    gameBoard,
  }
}

export default connect(mapStateToProps)(App);
