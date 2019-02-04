import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const {next,prev,page} = this.props
        return (
            <footer>
                {page!==1 && <button onClick={prev} >Previous</button>}
                {page!==24 && <button onClick={next} >next</button>}
            </footer>
        );
    }
}

export default Footer;