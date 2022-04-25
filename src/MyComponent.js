import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class MyComponent extends Component {
  static defaultProps = {
    name: 'basic name'
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div className="reactTest">
        my new component: {name}
        <br />
        child: {children}
        <br />
        my favorite number is {favoriteNumber}
      </div>
    );
  }
}


export default MyComponent;
