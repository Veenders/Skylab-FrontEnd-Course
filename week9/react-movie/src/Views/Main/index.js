import React, { Component } from 'react';

import ApiService from '../../Services/ApiService';

import MovieList from '../../Components/MovieList';
import Footer from '../../Components/Footer';


class MainView extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: [],
            page: 1,
            total_pages: 0,
            total_results: 0
        }
    }
    componentDidMount() {
        this.loadData(this.props.language);
    }
    componentWillReceiveProps(props) {
        this.loadData(props.language);
    }
    goToPage = (page) => {
        this.setState({page},()=>this.loadData(this.props.language));
    }
    async loadData(language){
        const {page} = this.state;
        const movies = await ApiService.getResults('now_playing',language, page);
        const {results, total_pages, total_results} = movies;
        this.setState({results, total_pages, total_results});
    }

    render() {
        const {results, page, total_pages, total_results} = this.state;
        return (
            <React.Fragment>
                <MovieList movies={results} />
                <Footer page={page} total_pages={total_pages} total_results={total_results} goToPage={this.goToPage}/>
            </React.Fragment>
        );
    }
}

export default MainView;