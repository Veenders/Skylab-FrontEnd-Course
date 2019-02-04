import React, { Component } from 'react';
import HangInfo from './HangInfo';
import Keyboard from './Keyboard';

class HangGame extends Component {
    constructor(props){
        super(props);

        this.state = {
            lifes:6,
            usedLetters:[],
            guessing: [],
            viewError: false,
            ErrorLetter: '',
        }
        
    }
    guessingWord = () => {
        const {word} = this.props;
        let guessing = [];
        for(var i=0;i<word.length;i++){
            /\s/.test(word[i])?guessing[i]='\u00A0':guessing[i]="_"
        }
        this.setState({guessing:guessing})
    }
    letterUpdate = (el) =>{
        const letter = el.toUpperCase();
        const word = this.props.word.toUpperCase();
        let {usedLetters, lifes, guessing} = this.state;
        if(usedLetters.includes(letter)){
            this.setState({viewError:true,ErrorLetter:letter});
            return;
        }
        usedLetters.push(letter);
        if(word.includes(letter)){
            for(let i=0;i<word.length;i++){
                if(word[i]===letter){
                    guessing[i]=letter;
                }
            }
        }else{
            lifes--;
        }
        !guessing.includes("_") && this.props.restartGame(true);
        (lifes===0) && this.props.restartGame(false);
        this.setState({lifes:lifes,guessing:guessing,usedLetters:usedLetters})
    }
    componentDidMount(){
        this.guessingWord();
    }
    render() {
        const {player} = this.props;
        const {guessing,lifes, usedLetters, viewError, ErrorLetter} = this.state;
        return (
            <div className="MainGame">
                <h2>Playing Game</h2>
                <div className="section">
                    <HangInfo player={player} lifes={lifes}/>
                    <div className="Game">
                        <p className="guessing">{guessing.join(' ')}</p>
                        {viewError&&<p className="Error">The key {ErrorLetter} is used</p>}
                        <div className="keyboard">
                            <Keyboard usedLetters={usedLetters} letterUpdate={this.letterUpdate}/>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default HangGame;