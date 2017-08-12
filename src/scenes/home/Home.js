import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p />
        </Jumbotron>
        <Row>
          <Col lg={12}>
            <img src="./cover.jpg" alt="404 error user not found" />
          </Col>
        </Row>
      </Grid>
    );
  }
}
