import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './buttonHollow.css';

class ButtonHollow extends Component {
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
            <div
              className="buttonHollow-root"
              onClick={() => this.props.history.push(this.props.address)}
            >
              {this.props.buttonText}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(ButtonHollow);
