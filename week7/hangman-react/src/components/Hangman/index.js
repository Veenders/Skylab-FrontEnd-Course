import React, { Component } from 'react';
import NewGame from '../NewGame';
import Results from '../Results';
import HangGame from '../hangGame';

class HangMan extends Component {
    constructor(props){
        super(props);

        this.state={
            view: 1,
            player: '',
            word: '',
            phase: 1,
            message: ''
        }
    }
    startGame = (name,word) => {
        this.setState({
            view: 2,
            player: name,
            word: word,
            phase: 2,
            message: ''
        })
    }
    viewResults = () => {
        this.setState({view:3})
    }
    closeResults = () => {
        const {phase} = this.state;
        this.setState({view: phase});
    }
    restartGame = (WinGame) => {
        let message = '';
        const {player} = this.state; 
        if(WinGame){
            localStorage.setItem('correctWordsR',(isNaN(localStorage.getItem('correctWordsR'))||localStorage.getItem('correctWordsR')===null)?1:parseInt(localStorage.getItem('correctWordsR'))+1);
            message = `Congratulations ${player}!!! You Win!!!`;
        }else{
            localStorage.setItem('wrongWordsR',(isNaN(localStorage.getItem('wrongWordsR'))||localStorage.getItem('wrongWordsR')===null)?1:parseInt(localStorage.getItem('wrongWordsR'))+1);
            message = `We're sorry ${player}. You Lose!!!`;
        }
        this.setState({
            view: 1,
            player: '',
            word: '',
            phase: 1,
            message: message
        })
    }
    render() {
        const {view, phase, player, word, message} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                <h1>Atomic Hangman by Veenders</h1>
                </header>
                <main>
                    <h4>{message}</h4>
                    {view === 1 && <NewGame newGame={this.startGame}/>}
                    {view === 2 && <HangGame player={player} word={word} restartGame={this.restartGame}/>}
                    {view === 3 && <Results phase={phase} close={this.closeResults}/>}
                </main>
                <footer>
                    <button onClick={this.viewResults}>View Results</button>
                </footer>
            </div>
        );
    }
}

export default HangMan;