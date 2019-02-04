import React, { Component } from 'react';
import Logo from './Components/Logo';
import Paragraph from './Components/Paragraph';
import Anchor from './Components/Anchor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Paragraph text={<span>Edit <code>src/App.js</code> and save to reload.</span>}/>
          <Anchor linkText="Learn React"/>
        </header>
      </div>
    );
  }
}

export default App;
