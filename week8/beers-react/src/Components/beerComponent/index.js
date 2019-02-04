import React, { Component } from 'react';
import Axios from 'axios';
import BeerDetail from './beerDetail';
import Loading from '../Loading';

class BeerComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            beer: {},
            loading: true,
        }
    }
    componentDidMount(){
        this.loadBeer();
    }
    loadBeer = async()=>{
        try{
            const id=this.props.beerId;
            this.setState({loading: true, beer:{}})
            const response = await Axios.get(`https://api.punkapi.com/v2/beers?ids=${id}`);
            if(response.status===200){
                this.setState({beer:response.data[0],loading:false})
            }
        }catch(error){
            console.error(error);
        }
    }
    render() {
        const {beer, loading} = this.state;
        return (
            <div>
                {loading?<Loading>Loading Beer Detail</Loading>:<BeerDetail beer={beer}/>}
            </div>
        );
    }
}

export default BeerComponent;