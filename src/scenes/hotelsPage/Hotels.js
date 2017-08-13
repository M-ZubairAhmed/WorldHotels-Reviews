import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Loader from '../../components/loader/Loader';
import IndividualRow from '../../components/individualRow/IndividualRow';
import './hotels.css';

export default class Hotels extends Component {
  renderIndividualRows = () => {
    if (this.props.data !== '') {
      return (
        <div>
          {this.props.data
            .filter(datum => datum.category === this.props.hotelType)
            .map(filteredDatum =>
              <IndividualRow
                key={filteredDatum.id}
                name={filteredDatum.name}
                location={filteredDatum.location}
                link={filteredDatum.link}
              />
            )}
        </div>
      );
    }
  };

  viewIndividualRows = () => {
    if (this.props.data === '') {
      return <Loader />;
    } else {
      return (
        <div>
          {this.renderIndividualRows()}
        </div>
      );
    }
  };

  render() {
    return (
      <Grid className="main-grid">
        <Row>
          <Col>
            <h1 className="hotels-header">
              {this.props.hotelType}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={6} lgOffset={3} md={6} sm={12} xs={12}>
            {this.viewIndividualRows()}
          </Col>
        </Row>
      </Grid>
    );
  }
}
