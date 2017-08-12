import React, { Component } from 'react';
import Loader from '../../components/loader/Loader';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import IndividualRow from '../../components/individualRow/IndividualRow';

export default class Hotels extends Component {
  constructor(props) {
    super(props);
  }

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

  body = () => {
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
      <Grid>
        <Row>
          <PageHeader>
            {this.props.hotelType}
          </PageHeader>
        </Row>
        <Row>
          {this.body()}
        </Row>
      </Grid>
    );
  }
}
