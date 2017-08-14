import React, { Component } from 'react';
import './poster.css';
import Statistics from '../../components/statistics/Statistics';
import { withRouter } from 'react-router-dom';

class Poster extends Component {
  render() {
    return (
      <div
        className="poster-root"
        onClick={() => this.props.history.push(this.props.address)}
      >
        <img
          className="poster-image"
          alt={this.props.hotelTypeTitle}
          src={this.props.hotelTypeImage}
        />
        <Statistics
          data={this.props.data}
          hotelIdentifier={this.props.hotelIdentifier}
        />
        <h2 className="poster-title">
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

export default withRouter(Poster);
