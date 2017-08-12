import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="containerBox">
              <div className="text-box">
                <p className="text-moto">Where will you travel next?</p>
              </div>
              <img className="coverImage" src="./cover.jpg" />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
