import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
    render() {
        const { movies } = this.props;
        return (
            <main className="Results">
                {movies.map((item=><MovieItem movie={item} key={item.id} />))}
            </main>
        );
    }
}

export default MovieList;