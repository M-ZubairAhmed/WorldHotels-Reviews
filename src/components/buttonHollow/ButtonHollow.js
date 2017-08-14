import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './buttonHollow.css';

export default class ButtonHollow extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col
            lg={8}
            lgOffset={2}
            md={8}
            mdOffset={2}
            sm={8}
            smOffset={2}
            xs={10}
            xsOffset={1}
          >
            <div className="buttonHollow-root">
              {this.props.buttonText}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
