import React, { Component } from 'react';

export default class ButtonHollow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bottonHollow-root">
        {this.props.buttonText}
      </div>
    );
  }
}
