import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, Glyphicon } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';
import './headerHome.css';

export default class HeaderHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <div className="headerHome-root">
          <Row>
            <Col>
              <h2 className="headerHome-moto">Where will you travel next?</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} lgOffset={3} sm={10} smOffset={1} xs={10} xsOffset={1}>
              <FormControl
                className="headerHome-search"
                placeholder="Find hotels"
                bsSize="large"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="headerHome-search-button"
                size="huge"
                color="teal"
              >
                <Glyphicon glyph="search" /> Search
              </Button>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}
