import React, { Component } from 'react';
import './_index.scss';
import Todo from '../Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List by Veenders</h1>
        </header>
        <main>
          <Todo />
        </main>
      </div>
    );
  }
}

export default App;
