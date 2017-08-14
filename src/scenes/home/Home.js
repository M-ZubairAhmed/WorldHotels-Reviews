import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormControl,
  Glyphicon,
  Button,
  PageHeader
} from 'react-bootstrap';
import { Image, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import Statistics from '../../components/statistics/Statistics';
import './home.css';

class Home extends Component {
  handleNavigationClicks = page => {
    this.props.history.push('/topHotels');
  };

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
            <PageHeader style={{ textAlign: 'center' }}>Categories</PageHeader>
          </Col>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Col className="card" lg={4} md={6} sm={12} xs={12}>
            <Card onClick={() => this.props.history.push('/topHotels')}>
              <Image src="./topH.jpg" />
              <Card.Content>
                <Card.Header>Top Hotels</Card.Header>
                <Card.Description>
                  Nothing but the best from the rest.
                </Card.Description>
              </Card.Content>
              <Card.Content className="view-more" extra>
                View All
              </Card.Content>
            </Card>
          </Col>
          <Col className="card" lg={4} xs={12}>
            <Card onClick={() => this.props.history.push('/luxuryHotels')}>
              <Image src="./luxH.jpg" />
              <Card.Content>
                <Card.Header>Luxurious Hotels</Card.Header>
                <Card.Description>Larger than life mansions.</Card.Description>
              </Card.Content>
              <Card.Content className="view-more" extra>
                View All
              </Card.Content>
            </Card>
          </Col>
          <Col className="card" lg={4} md={6} sm={12} xs={12}>
            <Card onClick={() => this.props.history.push('/smallHotels')}>
              <Image src="./smlH.jpg" />
              <Card.Content>
                <Card.Header>Small Hotels</Card.Header>
                <Card.Description>
                  Small and cozy abodes away from home.
                </Card.Description>
              </Card.Content>
              <Card.Content className="view-more" extra>
                View All
              </Card.Content>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(Home);
