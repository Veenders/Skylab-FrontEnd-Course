import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { LanguageContext } from '../../context/contextFactory';

class Header extends Component {
    static contextType = LanguageContext;
    render() {
        const { language, ChangeLanguage } = this.context;
        return (
            <header className="App-header">
                <h1><Link to='/'>Atomic Movies by Veenders</Link></h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li className="dropdown">
                            <Link to='/search/'>Search</Link>
                            <ul className="dropdown-content">
                                <li><Link to='/popular/'>Popular</Link></li>
                                <li><Link to='/top_rated/'>Top rated</Link></li>
                                <li><Link to='/upcoming/'>Up Coming</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <select value={language} onChange={(event)=>{ChangeLanguage(event.target.value)}}>
                    <option value='en-US'>English</option>
                    <option value='es'>Español</option>
                </select>
            </header>
        );
    }
}

export default Header;