import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
    render() {
        return (
            <div className="Loading">
                {this.props.children}
            </div>
        );
    }
}
Loading.propTypes = {
    children: PropTypes.node,
}
Loading.defaultProps = {
    children: 'Loading',
}

export default Loading;