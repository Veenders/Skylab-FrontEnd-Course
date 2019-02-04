import React, { Component } from 'react';
import { Link } from "react-router-dom";

class index extends Component {
    render() {
        const {beer} = this.props;
        return (
            <div className="BeerComponent">
                <h1>{beer.name} <span className="beer-avg">{beer.abv}</span></h1>
                <h3>{beer.tagline}</h3>
                <div className="BeerInfo">
                    <div className="BeerImg">
                        <img src={beer.image_url} alt={beer.name}/>
                    </div>
                    <div className="BeerDesc">
                        <h4>Description</h4>
                        {beer.description}
                        <h4>Detail Information</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        Attenuation Level
                                    </th>
                                    <td>
                                        {beer.attenuation_level}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Boil Volume
                                    </th>
                                    <td>
                                        {beer.boil_volume.value} {beer.boil_volume.unit}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Volume
                                    </th>
                                    <td>
                                        {beer.volume.value} {beer.volume.unit}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Brewers Tips
                                    </th>
                                    <td>
                                        {beer.brewers_tips}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        First Brewed
                                    </th>
                                    <td>
                                        {beer.first_brewed}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        First Brewed
                                    </th>
                                    <td>
                                        {beer.food_pairing.map((el,i)=>{
                                            return <p key={beer.id+i}>{el}</p>;
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Link to={`/`}>Return to List</Link>
            </div>
        );
    }
}

export default index;