import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './scenes/home/Home';
import Hotels from './scenes/hotelsPage/Hotels';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  async componentDidMount() {
    try {
      const request = await fetch(
        'https://h4lservices.restlet.net/v1/hotels?media=json'
      );
      if (request.ok) {
        const response = await request.json();
        this.setState({
          data: response
        });
      } else {
        console.log('Server responded with message :-', request.status);
      }
    } catch (e) {
      console.log('Error while requesting for JSON :-', e.message);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar style={{ border: '0', marginBottom: '0px' }} collapseOnSelect>
            <Navbar.Header>
              <Link to="/">
                <Navbar.Brand>World Hotel reviews</Navbar.Brand>
              </Link>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/topHotels">
                  <NavItem eventKey={2}>Top Hotels</NavItem>
                </LinkContainer>
                <LinkContainer to="/luxuryHotels">
                  <NavItem eventKey={3}>Luxury Hotels</NavItem>
                </LinkContainer>
                <LinkContainer to="/smallHotels">
                  <NavItem eventKey={4}>Small Hotels</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            exact
            path="/"
            render={() => <Home data={this.state.data} />}
          />
          <Route
            path="/luxuryHotels"
            render={() =>
              <Hotels
                data={this.state.data}
                hotelType="Top Luxury Hotels - World"
              />}
          />
          <Route
            path="/smallHotels"
            render={() =>
              <Hotels
                data={this.state.data}
                hotelType="Top Small Hotels - World"
              />}
          />
          <Route
            path="/topHotels"
            render={() =>
              <Hotels data={this.state.data} hotelType="Top Hotels - World" />}
          />
          <Route path="/all" render={() => <Hotels data={this.state.data} />} />
        </div>
      </Router>
    );
  }
}
