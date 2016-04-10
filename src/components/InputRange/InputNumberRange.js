import React, { Component, PropTypes } from 'react';
import './InputNumberRange.scss';

export default class InputRange extends Component {

  render() {
    return (
      <div className="input-range">
        <button className="subtract">-</button>
        <input min="4" max="128"/>
        <button>+</button>
      </div>
    );
  }

};

