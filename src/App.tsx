import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import { IStoreState } from './redux/types/index';
// import Graph from './Graph/Graph';

interface IProps { dummyState: number };

class App extends React.Component<IProps> {
  public render() {
    window.console.log('App connected to store', this.props.dummyState);
    // const gameBoard = new Graph({
    //     'A': { 'B': 0, 'C': 0 },
    //     'B': { 'A': 0, 'C': 1 },
    //     'C': { 'A': 0, 'B': 1 },
    //   });

    //   window.console.log(gameBoard.getGraph());

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

function mapStateToProps({ dummyState }: IStoreState) {
  return {
    dummyState,
  }
}

export default connect(mapStateToProps)(App);
