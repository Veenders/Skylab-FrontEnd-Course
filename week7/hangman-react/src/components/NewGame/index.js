import React, { Component } from 'react';

class NewGame extends Component {
    constructor(props){
        super(props);
        this.state={
            player: '',
            words: ['Javascript','React','Expresion Regular','Angular','Variable','Loop' ],
            viewError: false
        }
    }
    startGame = () => {
        const {newGame} = this.props;
        const {player,words} = this.state;
        const word = words[Math.round(Math.random()*words.length)]
        if(player!==''){
            this.setState({viewError:false});
            newGame(player,word);
        }else{
            this.setState({viewError:true});
        }
    }
    upadtePlayer = (event)=>{
        this.setState({player: event.target.value});
    }
    render() {
        const {player,viewError} = this.state;
        return (
            <div>
                <h2>New Game</h2>
                <input 
                    type='text' 
                    value={player}
                    placeholder='Put your name Here' 
                    onChange={this.upadtePlayer}
                />
                <button onClick={this.startGame}>
                    Start
                </button>
                {viewError && <p>You need to put some name</p>}
            </div>
        );
    }
}

export default NewGame;