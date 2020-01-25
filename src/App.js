import React, { Component } from 'react';
// import logo from './logo.svg';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SortingVisualizer></SortingVisualizer>
      </div>
    );
  }
}

export default App;
