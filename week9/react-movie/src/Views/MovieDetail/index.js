import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

import ApiService from '../../Services/ApiService';

import film from '../../img/film.jpg';
import Loading from '../../Components/Loading';

class MovieDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            movie: {},
            loading: true,
            lang: {
                es: {
                    otitle: 'Título Original',
                    adult: 'Calificación para adultos',
                    olanguage: 'Idioma Original',
                    budget: 'Presupuesto',
                    homepage: 'Pàgina Web',
                    genres: 'Géneros',
                    return:'Volver al Inicio',
                    details: 'Detalles',
                    production_companies: 'Productoras',
                    release_date: 'Fecha de Estreno'
                },
                "en-US": {
                    otitle: 'Original Title',
                    adult: 'Adult Qualification',
                    olanguage: 'Original Language',
                    budget: 'Budget',
                    homepage: 'Home Page',
                    genres: 'Genres',
                    return:'Return to Start',
                    details: 'Details',
                    production_companies: 'Production Companies',
                    release_date: 'Release Date'
                }
            }
        }
    }
    componentDidMount(){
        this.loadData();
    }
    async loadData(){
        this.setState({loading:true});
        const { language, match} = this.props
        const movie = await ApiService.getResultId(match.params.id,language);
        this.setState({movie,loading:false});
    }
    render() {
        const { language } = this.props
        const {movie, lang, loading} = this.state;
        return (
            <div>
                {loading?<Loading />:<article>
                    <div className="poster"><img src={movie.poster_path!==null?"https://image.tmdb.org/t/p/w500"+movie.poster_path:film} alt={movie.title} /></div>
                    <div className="details">
                        <h1>{movie.title}</h1>
                        <p>{lang[language].otitle}: <strong>{movie.original_title}</strong></p>
                        <p>{movie.overview}</p>
                        <h3>{lang[language].details}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>{lang[language].adult}</th>
                                    <td>{movie.adult?'Solo para adultos':'Apta'}</td>
                                </tr>
                                <tr>
                                    <th>{lang[language].olanguage}</th>
                                    <td>{movie.original_language}</td>
                                </tr>
                                <tr>
                                    <th>{lang[language].budget}</th>
                                    <td>{movie.budget}</td>
                                </tr>
                                <tr>
                                    <th>{lang[language].homepage}</th>
                                    <td><a href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</a></td>
                                </tr>
                                <tr>
                                    <th>{lang[language].genres}</th>
                                    <td>{movie.genres.map((genre,i)=>{
                                        return `${genre.name}${i!==movie.genres.length-1?' - ':''}`
                                    })}</td>
                                </tr>
                                <tr>
                                    <th>{lang[language].popularity}</th>
                                    <td>{movie.popularity}</td>
                                </tr>
                                <tr>
                                    <th>{lang[language].production_companies}</th>
                                    <td>{movie.production_companies.map((company,i)=>{
                                        return <div className="company" key={company.id}>
                                                {company.logo_path!==null && <img className="logoCompany" src={"https://image.tmdb.org/t/p/w500"+company.logo_path} alt={company.name}/>}
                                                {company.name} 
                                            </div>
                                            
                                        }
                                    )}</td>
                                </tr>
                                <tr>
                                    <th>{lang[language].release_date}</th>
                                    <td>{movie.release_date}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </article>}
                <Link to='/'>{lang[language].return}</Link>
            </div>
        );
    }
}

export default withRouter(MovieDetail);