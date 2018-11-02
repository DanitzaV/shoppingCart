import React, { Component } from 'react';
import './App.css';
import Navbars from './Componentes/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars />
        {this.props.children}
      </div>
    );
  }
}

export default App;
