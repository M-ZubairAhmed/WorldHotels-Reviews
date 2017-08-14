import React, { Component } from 'react';
import './statistics.css';

export default class Statistics extends Component {
  calculateStatistics = hotelType => {
    if (this.props.data !== '') {
      return this.props.data.filter(datum => datum.category === hotelType)
        .length;
    }
  };

  render() {
    return (
      <div className="root">
        <h2 className="value">
          {this.calculateStatistics(this.props.hotelType)}
        </h2>
        <h4 className="type">
          {this.props.hotelName.toUpperCase()}
        </h4>
      </div>
    );
  }
}
