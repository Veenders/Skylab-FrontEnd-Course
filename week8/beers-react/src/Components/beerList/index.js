import React, { Component } from 'react';
import BeerItem from './BeerItem'

class BeersList extends Component {
    render() {
        const {Beers} = this.props;
        return (
            <main>
                {Beers.map((beer)=>{
                    return <BeerItem key={beer.id} beer={beer} />
                })}
            </main>
        );
    }
}

export default BeersList;