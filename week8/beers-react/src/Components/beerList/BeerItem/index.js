import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    const {beer} = props;
    return (
        <div className="BeerCard">
            <div className="image-card">    
                <img src={beer.image_url} alt={beer.name}/>
            </div>
            <div className="card-body">
                <div className="beer-title card-title">
                    <h3>
                        <Link to={`/beer/${beer.id}`}>
                            {beer.name} 
                            <span className="beer-avg"> {beer.abv}</span>
                        </Link>
                    </h3>
                </div>
                <div className="beer-desc card-text">{beer.description}</div>
            </div>
        </div>
    );
};
