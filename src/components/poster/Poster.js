import React, { Component } from 'react';
import './poster.css';

export default class Poster extends Component {
  render() {
    return (
      <div className="poster-root" onClick={() => console.log('hello')}>
        <img
          className="poster-image"
          alt={this.props.hotelTypeTitle}
          src={this.props.hotelTypeImage}
        />
        <h2>
          {this.props.hotelTypeTitle}
        </h2>
        <h5 className="poster-gist">
          {this.props.hotelTypeGist}
        </h5>
        <h4 className="poster-viewButton">
          <hr />View
        </h4>
      </div>
    );
  }
}
