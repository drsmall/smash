import React, { Component, PropTypes } from 'react';
//import { Link, IndexLink } from 'react-router';
import './Heading.scss';

export default class Heading extends Component {

  render() {
    return (
      <h1 className="Heading">
        {this.props.text}
      </h1>
    );
  }

};