import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            value: 'beer_name',
            searchword: '',
            beer_name: '',
            yeast: '',
            hops: '',
            malt: '',
            food: '',
            brewed_before: '',
            brewed_after: ''
        }
    }
    changeBasicSearch = (el) =>{
        this.setState({value:el.target.value,searchword:''});
    }
    changeWord = (el) => {
        this.setState({searchword:el.target.value})
    }
    changeAdOptions = (el) => {
        const {name,value} = el.target
        const obj ={}
        obj[name]=value
        this.setState( obj );
    }
    BasicSearch = () =>{
        const {onSearch} = this.props;
        const {value,searchword} = this.state;
        let message = searchword!==''?`&${value}=${searchword}`:'';
        if(value==="brewed_after" || value==="brewed_before"){
            let date = new Date(searchword);
            message = `${value}=${date.getMonth()<9?'0'+(parseInt(date.getMonth())+1):date.getMonth()+1}-${date.getFullYear()}`;
        }
        onSearch(message);
    }
    AdvancedSearch = () => {
        const {onSearch} = this.props;
        const {beer_name,yeast,hops,malt,food,brewed_before,brewed_after} = this.state;
        let message = '';
        if(beer_name!==''){message += `&beer_name=${beer_name}`};
        if(yeast!==''){message += `&yeast=${yeast}`};
        if(hops!==''){message += `&hops=${hops}`};
        if(malt!==''){message += `&malt=${malt}`};
        if(food!==''){message += `&food=${food}`};
        if(brewed_before!==''){
            let date = new Date(brewed_before);
            message += `&brewed_before=${date.getMonth()<9?'0'+(parseInt(date.getMonth())+1):date.getMonth()+1}-${date.getFullYear()}`;
        }
        if(brewed_after!==''){
            let date = new Date(brewed_after);
            message += `&brewed_after=${date.getMonth()<9?'0'+(parseInt(date.getMonth())+1):date.getMonth()+1}-${date.getFullYear()}`;
        }
        onSearch(message);
    }
    render() {
        const {value,searchword,beer_name} = this.state;
        const {advanced, changeSearch} = this.props;
        let type = value==='brewed_before' || value==="brewed_after" ?'date':'text';
        return (
            
            <div className={advanced?'AdvSearch':'Search'}>
            { advanced ? (
                    <div >
                        Search for:
                        <input type="text" value={beer_name} name="beer_name" placeholder="Beer Name" onChange={this.changeAdOptions}/>
                        <input type="text" name="yeast" placeholder="Yeast" onChange={this.changeAdOptions}/>
                        <input type="text" name="hops" placeholder="Hops" onChange={this.changeAdOptions}/>
                        <input type="text" name="malt" placeholder="Malt" onChange={this.changeAdOptions}/>
                        <input type="text" name="food" placeholder="Food" onChange={this.changeAdOptions}/>
                        <input type="date" name="brewed_before" placeholder="Brewed Before" onChange={this.changeAdOptions}/>
                        <input type="date" name="brewed_after" placeholder="Brewed After" onChange={this.changeAdOptions}/>
                        <button onClick={this.AdvancedSearch}><i className="fas fa-search"></i></button>
                        <button onClick={changeSearch} title="Basic Search"><i className="fas fa-search-minus"></i></button>
                    </div>
                ):(
                    <div>
                        <select value={value} onChange={this.changeBasicSearch}>
                            <option value="beer_name">Name</option>
                            <option value="yeast">Yeast</option>
                            <option value="hops">Hops</option>
                            <option value="malt">Malt</option>
                            <option value="food">Food Pairing</option>
                            <option value="brewed_before">Brewed Before</option>
                            <option value="brewed_after">Brewed After</option>
                        </select>
                        <input value={searchword} type={type} onChange={this.changeWord} />
                        <button onClick={this.BasicSearch}><i className="fas fa-search"></i></button>
                        <button onClick={changeSearch} title="Advanced Search"><i className="fas fa-search-plus"></i></button>
                    </div>
                )
            }
               
            </div>
        );
    }
}

export default Search;