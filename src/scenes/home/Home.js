import React, { Component } from 'react';
import './home.css';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  FormGroup,
  InputGroup,
  FormControl,
  Glyphicon,
  Button,
  PageHeader
} from 'react-bootstrap';
import { Icon, Image, Statistic, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  calculateStatistics = hotelType => {
    if (this.props.data !== '') {
      return this.props.data.filter(datum => datum.category === hotelType)
        .length;
    }
  };

  handleNavigationClicks = page => {
    this.props.history.push('/topHotels');
  };

  render() {
    return (
      <Grid className="main-home">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="containerBox">
              <div className="text-box">
                <p className="text-moto">Where will you travel next?</p>
                <div className="search">
                  <InputGroup className="inside-search">
                    <FormControl
                      style={{ textAlign: 'center' }}
                      placeholder="Find hotels, resorts, accomodations and more"
                    />
                    <Button bsStyle="primary" className="search-button">
                      <Glyphicon glyph="search" /> Search
                    </Button>
                  </InputGroup>
                </div>
              </div>
              <img className="coverImage" src="./cover.jpg" />
            </div>
          </Col>
        </Row>
        <Row className="statistics-row">
          <Statistic.Group widths="four">
            <Statistic>
              <Statistic.Value>
                {this.calculateStatistics('Top Hotels - World')}
              </Statistic.Value>
              <Statistic.Label>Top Hotels</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                {this.calculateStatistics('Top Luxury Hotels - World')}
              </Statistic.Value>
              <Statistic.Label>Luxury Hotels</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                {this.calculateStatistics('Top Small Hotels - World')}
              </Statistic.Value>
              <Statistic.Label>Small Hotels</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>&</Statistic.Value>
              <Statistic.Label>more ...</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Row>
        <Row>
          <Col>
            <PageHeader style={{ textAlign: 'center' }}>Categories</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card onClick={() => this.props.history.push('/topHotels')}>
              <Image src="./topH.jpg" />
              <Card.Content>
                <Card.Header>Top Hotels</Card.Header>
                <Card.Description>
                  Nothing but the best from the rest.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>View All</Card.Content>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card onClick={() => this.props.history.push('/luxuryHotels')}>
              <Image src="./luxH.jpg" />
              <Card.Content>
                <Card.Header>Luxurious Hotels</Card.Header>
                <Card.Description>Larger than life mansions.</Card.Description>
              </Card.Content>
              <Card.Content extra>View All</Card.Content>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <Card onClick={() => this.props.history.push('/smallHotels')}>
              <Image src="./smlH.jpg" />
              <Card.Content>
                <Card.Header>Small Hotels</Card.Header>
                <Card.Description>
                  Small and cozy abodes away from home.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>View All</Card.Content>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(Home);
