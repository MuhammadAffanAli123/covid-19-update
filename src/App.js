import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './fetch'
// import Parent from './parent'
// import Chart from './chart'
// import Application from './select'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
        {/* <Chart/> */}
        {/* <Parent /> */}
      </div>
    );
  }
}

export default App;
