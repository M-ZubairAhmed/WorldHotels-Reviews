import React, { Component } from 'react';

export default class IndividualRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.name}
        </div>
        <div>
          {this.props.location}
        </div>
        <div>
          {this.props.link}
        </div>
      </div>
    );
  }
}
