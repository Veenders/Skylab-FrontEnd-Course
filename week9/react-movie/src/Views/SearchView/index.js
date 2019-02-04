import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

import ApiService from '../../Services/ApiService';

import MovieList from '../../Components/MovieList';

import Footer from '../../Components/Footer';


class SearchView extends Component {
    constructor(props){
        super(props);
        this.state = {
            category:'popular',
            results: [],
            query: '',
            page: 1,
            total_pages: 0,
            total_results: 0
        }
    }
    componentDidMount() {
        const {pathname} = this.props.location;
        let category = pathname.replace(/\//g,'');
        category = category === 'search'?'popular':category;
        this.state.category!==category? this.setState({category},()=>this.loadData()):this.loadData();
    }
    componentWillReceiveProps(props) {
        const {pathname} = props.location;
        let category = pathname.replace(/\//g,'');
        category = category === 'search'?'popular':category;
        this.state.category!==category? this.setState({category,query:''},()=>this.loadData(props.language)):this.loadData(props.language);
    }
    goToPage = (page) => {
        this.setState({page},()=>this.loadData());
    }
    setQuery =(event) =>{
        this.setState({query:event.target.value});
    }
    async SendSearch(event){
        if(event.which === 13 || event.target.innerHTML==="Search") {
            this.setState({page:1},()=>this.state.query!=='' && this.loadData());
           
        }
    }
    async loadData(language=this.props.language){
        const {category, page, query} = this.state;
        const movies = await ApiService.getResults(category, language, page, query);
        const {results, total_pages, total_results} = movies;
        this.setState({results, total_pages, total_results});
    }

    render() {
        const {results, query, page, total_pages, total_results} = this.state;
        return (
            <React.Fragment>
                
                <div className="search">
                    <div className="searchOption">
                        <input value={query}  
                            type="text" 
                            placeholder="Search a Movie..." 
                            onChange={(event)=>this.setQuery(event)} 
                            onKeyPress={(event)=>this.SendSearch(event)}
                        />
                        <button onClick={(event)=>this.SendSearch(event)}>Search</button>
                    </div>
                    <div className="Options">
                        <ul>
                            <li><Link to='/popular/'>Popular</Link></li>
                            <li><Link to='/top_rated/'>Top rated</Link></li>
                            <li><Link to='/upcoming/'>Up Coming</Link></li>
                        </ul>
                    </div>
                </div>
                <MovieList movies={results} />
                <Footer page={page} total_pages={total_pages} total_results={total_results} goToPage={this.goToPage}/>
            </React.Fragment>
        );
    }
}

export default withRouter(SearchView);