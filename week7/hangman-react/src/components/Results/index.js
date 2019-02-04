import React, { Component } from 'react';

class Results extends Component {
    constructor(props){
        super(props);

        this.state={
            correctWords:(isNaN(localStorage.getItem('correctWordsR'))||localStorage.getItem('correctWordsR')===null)?0:parseInt(localStorage.getItem('correctWordsR')),
            wrongWords:(isNaN(localStorage.getItem('wrongWordsR'))||localStorage.getItem('wrongWordsR')===null)?0:parseInt(localStorage.getItem('wrongWordsR')),
        }
    }
    render() {
        const {close} = this.props;
        const {correctWords,wrongWords} = this.state
        return (
            <div>
                <h2>Results</h2>
                <p>Correct Words: {correctWords}</p>
                <p>Wrong Words: {wrongWords}</p>
                <button onClick={close}>Close</button>
            </div>
        );
    }
}

export default Results;