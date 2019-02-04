import React from 'react';

export default (props) => {
    const {perPage,onChangeFunc} = props;
    return (
        <div className="results4page">
            <select value={perPage} onChange={(value)=>{onChangeFunc(value)}}>
                <option value="4">4</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="52">52</option>
                <option value="80">80</option>
            </select>
        </div>
        
    );
}


