import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormControl,
  Glyphicon,
  Button
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Statistics from '../../components/statistics/Statistics';
import Poster from '../../components/poster/Poster.js';
import './home.css';

class Home extends Component {
  render() {
    return (
      <Grid className="main-home">
        <div className="top-header-div">
          <Row>
            <Col>
              <h2 className="text-moto">Where will you travel next?</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} lgOffset={3} sm={10} smOffset={1} xs={10} xsOffset={1}>
              <FormControl
                style={{ textAlign: 'center' }}
                placeholder="Find hotels"
                bsSize="large"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                bsSize="large"
                bsStyle="success"
                className="search-button"
              >
                <Glyphicon glyph="search" /> Search
              </Button>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Statistics
              hotelType="Top Hotels - World"
              data={this.props.data}
              hotelName="Top Hotels"
            />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Statistics
              hotelType="Top Luxury Hotels - World"
              data={this.props.data}
              hotelName="Luxury Hotels"
            />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Statistics
              hotelType="Top Small Hotels - World"
              data={this.props.data}
              hotelName="Small Hotels"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="categories-title">
              <hr />Categories
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="card" lg={4} md={6} sm={12} xs={12}>
            <Poster
              hotelTypeImage="./topH.jpg"
              hotelTypeTitle="Top Hotels"
              hotelTypeGist="Nothing but the best from the rest."
              hotelLink="/topHotels"
            />
          </Col>
          <Col className="card" lg={4} md={6} sm={12} xs={12}>
            <Poster
              hotelTypeImage="./luxH.jpg"
              hotelTypeTitle="Luxurious Hotels"
              hotelTypeGist="Larger than life mansions."
              hotelLink="/luxuryHotels"
            />
          </Col>
          <Col className="card" lg={4} md={6} sm={12} xs={12}>
            <Poster
              hotelTypeImage="./smlH.jpg"
              hotelTypeTitle="Small Hotels"
              hotelTypeGist="Small and cozy abodes away from home."
              hotelLink="/smallHotels"
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(Home);
