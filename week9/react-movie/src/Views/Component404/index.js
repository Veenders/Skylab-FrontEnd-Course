import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Component404 extends Component {
    render() {
        const { language } = this.props
        const mes = {
            es: {
                message:'Página No Encontrada',
                return:'Volver al Inicio',
            },
            "en-US": {
                message:'Page Not Found', 
                return:'Return to Start'
            }
        }
        return (
            <React.Fragment>
                <div className="notFound">
                    {mes[language].message}
                    <Link to='/'>{mes[language].return}</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Component404;