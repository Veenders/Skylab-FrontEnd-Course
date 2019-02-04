import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import Search from '../Search';
import Beers4Page from './Beers4Page';

class Header extends Component {
    constructor(props){
        super(props);

        this.state={
            advSearch: false,
        }
    }
    ChangeSearch = () => {
        this.setState({advSearch:!this.state.advSearch});
    }
    render() {
        const {perPage, onChangeFunc, onSearch, location} = this.props;
        const {advSearch} = this.state;
        return (
            <header className="App-header">
                <Link to="/"><h1>Atomic Beers by Veenders</h1></Link>
                <Search advanced={advSearch} changeSearch={this.ChangeSearch} onSearch={onSearch} />
                { location.pathname==='/' && <Beers4Page perPage={perPage} onChangeFunc={onChangeFunc}/>}
            </header>
        );
    }
}

export default withRouter(Header);