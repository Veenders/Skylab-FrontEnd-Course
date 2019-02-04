import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './index.scss';
import MainView from '../../Views/Main';
import SearchView from '../../Views/SearchView';
import MovieDetail from '../../Views/MovieDetail';
import Component404 from '../../Views/Component404';
import Header from '../../Components/Header';

import { LanguageContext } from '../../context/contextFactory';

class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: 'es'
        }
    }

    ChangeLanguage = (language) =>{
        this.setState({language});
    }
    
    render() {
        const {language} = this.state;
        return (
            <Router>
                <div className="App">
                    <LanguageContext.Provider value={{ language, ChangeLanguage: this.ChangeLanguage }}>
                        <Header />
                    </LanguageContext.Provider>
                        <Switch>
                            <Route exact path="/" component={()=><MainView language={language} />} />
                            <Route exact path="/search/" component={()=><SearchView language={language} />} />
                            <Route exact path="/popular/" component={()=><SearchView language={language} />} />
                            <Route exact path="/top_rated/" component={()=><SearchView language={language} />} />
                            <Route exact path="/upcoming/" component={()=><SearchView language={language} />} />
                            <Route exact path="/movie/:id" component={()=><MovieDetail language={language} />} />
                            <Route component={()=><Component404 language={language} />} />
                        </Switch>
                    
                </div>
            </Router>
            
        );
    }
}

export default Movies;