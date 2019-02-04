import React from 'react';

export default (props) => {
    const { usedLetters,letterUpdate } = props;
    let keyboard = 'qwertyuiopasdfghjklñzxcvbnm';
    let letters = keyboard.split('');
    
    return letters.map((el)=>{
        return (
            <button key={el} 
                className={ `buttonletter ${usedLetters.includes(el.toUpperCase())? 'used' : ''}`} 
                data-value={el} 
                onClick={()=>{letterUpdate(el)}}>
                    {el.toUpperCase()}
            </button>
        )
    });
}