import React from 'react';

export default function HangInfo (props) {
    const {player, lifes} = props
    return (
        <div className="GameInfo">
            <p>
                Player: {player}<br />
                Lifes: {lifes}
            </p>
            <div id="img" className={`lifes${lifes}`}></div> 
        </div>
    );
};
