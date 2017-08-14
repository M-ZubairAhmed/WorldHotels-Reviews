import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderHome from './headerHome/HeaderHome';
import Poster from '../../components/poster/Poster.js';
import ButtonHollow from '../../components/buttonHollow/ButtonHollow';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderHome data={this.props.data} />
        <Grid>
          <Row>
            <h3 className="categories-title">
              <hr />Categories<hr />
            </h3>
          </Row>
          <Row>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Poster
                hotelTypeImage="./topH.jpg"
                hotelTypeTitle="Top Hotels"
                hotelTypeGist="Nothing but the best from the rest."
                address="/topHotels"
                hotelIdentifier="Top Hotels - World"
                data={this.props.data}
              />
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Poster
                hotelTypeImage="./luxH.jpg"
                hotelTypeTitle="Luxurious Hotels"
                hotelTypeGist="Larger than life mansions."
                address="/luxuryHotels"
                hotelIdentifier="Top Luxury Hotels - World"
                data={this.props.data}
              />
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Poster
                hotelTypeImage="./smlH.jpg"
                hotelTypeTitle="Small Hotels"
                hotelTypeGist="Small and cozy abodes away from home."
                address="/smallHotels"
                hotelIdentifier="Top Small Hotels - World"
                data={this.props.data}
              />
            </Col>
          </Row>
        </Grid>
        <ButtonHollow buttonText="View All Hotels" address="/all" />
      </div>
    );
  }
}
