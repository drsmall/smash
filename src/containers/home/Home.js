import React, { Component } from 'react';
import { default as Header } from '../../components/header/Header.js';
import { default as Heading } from '../../components/heading/Heading.js';
import { default as SettingOption } from '../../components/SettingOption/SettingOption.js';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Heading text="Tournament SETTINGS"/><br/>

        <SettingOption label="How many players per match?" min="2" max="8"/>
        <SettingOption label="How many entrants?" min="4" max="128"/>

        <div className="center_h">
          <button>continue</button>
        </div>

      </div>
    );
  }
}
