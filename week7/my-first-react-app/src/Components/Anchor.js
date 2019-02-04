import React, { Component } from 'react';

class Anchor extends Component {
    constructor(props){
        super(props);
        this.class='App-link';
    }
    render() {
        const{linkText, target} = this.props;
        return (
            <a
            className="App-link"
            href="https://reactjs.org"
            target={target}
            rel="noopener noreferrer"
          >
            { linkText || 'Learn React or Not' }
          </a>
        )
    }
}
export default Anchor;