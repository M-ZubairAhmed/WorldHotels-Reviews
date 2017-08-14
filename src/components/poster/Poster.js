import React, { Component } from 'react';
import './poster.css';

export default class Poster extends Component {
  render() {
    return (
      <div className="root-poster" onClick={() => console.log('hello')}>
        <img
          className="image"
          alt={this.props.hotelTypeTitle}
          src={this.props.hotelTypeImage}
        />
        <h2>
          {this.props.hotelTypeTitle}
        </h2>
        <h5>
          {this.props.hotelTypeGist}
        </h5>
      </div>
    );
  }
}
