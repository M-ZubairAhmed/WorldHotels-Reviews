import React, { Component } from 'react';
import './statistics.css';

export default class Statistics extends Component {
  calculateStatistics = hotelIdentifier => {
    if (this.props.data !== '') {
      return this.props.data.filter(datum => datum.category === hotelIdentifier)
        .length;
    }
  };

  render() {
    return (
      <div className="statistics-root">
        <h2 className="statistics-value">
          {this.calculateStatistics(this.props.hotelIdentifier)}
        </h2>
      </div>
    );
  }
}
