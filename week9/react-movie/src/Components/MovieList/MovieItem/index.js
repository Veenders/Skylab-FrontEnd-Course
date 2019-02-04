import React, { Component } from 'react';
import { Link } from "react-router-dom";
import film from '../../../img/film.jpg';

class MovieItem extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className="movieCard">
                <div className="imageMovie">
                    <Link to={`/movie/${movie.id}`}><img src={movie.poster_path!==null?"https://image.tmdb.org/t/p/w500"+movie.poster_path:film} alt={movie.title} /></Link>
                </div>
                <div className="titleMovie">
                    <Link to={`/movie/${movie.id}`}><h3>{movie.title}</h3></Link>
                    <h5>{movie.original_title}</h5>
                </div>
                <div className="content">
                    {movie.overview}
                </div>
            </div>
        );
    }
}

export default MovieItem;