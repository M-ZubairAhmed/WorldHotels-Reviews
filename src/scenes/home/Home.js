import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, Glyphicon } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';
import HeaderHome from './headerHome/HeaderHome';
import Search from './headerHome/search/Search';
import Poster from '../../components/poster/Poster.js';
import ButtonHollow from '../../components/buttonHollow/ButtonHollow';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderHome />
        <Grid className="main-home">
          <Row>
            <h3 className="categories-title">
              <hr />Categories<hr />
            </h3>
          </Row>
          <Row>
            <Col className="card" lg={4} md={6} sm={12} xs={12}>
              <Poster
                hotelTypeImage="./topH.jpg"
                hotelTypeTitle="Top Hotels"
                hotelTypeGist="Nothing but the best from the rest."
                hotelLink="/topHotels"
                hotelIdentifier="Top Hotels - World"
                data={this.props.data}
              />
            </Col>
            <Col className="card" lg={4} md={6} sm={12} xs={12}>
              <Poster
                hotelTypeImage="./luxH.jpg"
                hotelTypeTitle="Luxurious Hotels"
                hotelTypeGist="Larger than life mansions."
                hotelLink="/luxuryHotels"
                hotelIdentifier="Top Luxury Hotels - World"
                data={this.props.data}
              />
            </Col>
            <Col className="card" lg={4} md={6} sm={12} xs={12}>
              <Poster
                hotelTypeImage="./smlH.jpg"
                hotelTypeTitle="Small Hotels"
                hotelTypeGist="Small and cozy abodes away from home."
                hotelLink="/smallHotels"
                hotelIdentifier="Top Small Hotels - World"
                data={this.props.data}
              />
            </Col>
          </Row>
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
              <Button fluid size="huge">
                View All Hotels
              </Button>
              <ButtonHollow buttonText="View All Hotels" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
