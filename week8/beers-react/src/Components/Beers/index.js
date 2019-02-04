import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import Header from '../headerBeers';
import BeersList from '../beerList';
import Footer from '../Footer';
import BeerComponent from '../beerComponent';
import Loading from '../Loading';

class Beers extends Component {
    constructor(props){
        super(props);
        this.state={
            page: 1,
            per_page: 12,
            beers:[],
            loading: true
        }
    }
    componentDidMount(){
        this.loadData();
    }
    doItFavorite(id){
        console.log(id);
    }
    loadData = async (variable='') => {
        try{
            this.setState({loading: true, beers:[]})
            const{page, per_page} = this.state;
            const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}${variable}`);
            if(response.status===200){
                this.setState({beers:response.data,loading:false})
            }
        }catch(error){
            console.error(error);
        }
    }
    ChangeFunction = (value)=>{
        this.setState({per_page:value.target.value},()=>this.loadData());
    }
    nextPage = () =>{
        this.setState({page:this.state.page+1},()=>this.loadData());
        
    }
    prevPage = () =>{
        this.setState({page:this.state.page-1},()=>this.loadData())
    }
    render() {
        const {beers,loading, per_page, page} = this.state;
        return (
            <Router>
                <div className="App">
                    <Header perPage={per_page} onChangeFunc={this.ChangeFunction} onSearch={this.loadData} />
                    <Switch>
                        <Route exact path="/" component={()=>
                            <React.Fragment>
                                {loading? <Loading>Loading Beer List</Loading>:<BeersList Beers={beers} Favorite={this.DoItFavorite}/>}
                                <Footer page={page} next={this.nextPage} prev={this.prevPage}/>
                            </React.Fragment>} />
                        <Route exact path="/beer/:id" render={(props)=><BeerComponent beerId={props.match.params.id} />} />
                        <Route component={()=>
                            <div>
                              <span className="notFound">Sorry, we can't find this page</span><br />
                              <Link to='/'>Return to Main Page</Link>  
                            </div>
                        }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Beers;