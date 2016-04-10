import React, { Component, PropTypes } from 'react';
import { default as InputRange } from '../InputRange/InputNumberRange.js';
import './SettingOption.scss';

export default class SettingOption extends Component {

  render() {
    return (
      <div className="setting-option">
        <label>{this.props.label}</label>
        <InputRange min={this.props.min} max={this.propsmax}/>
      </div>
    );
  }

};

