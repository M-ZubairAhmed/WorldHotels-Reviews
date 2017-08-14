import React, { Component } from 'react';

export default class Poster extends Component {
  render() {
    return (
      <div>
        <img src={this.props.hotelTypeImage} />
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
