import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './scenes/home/Home';
import Hotels from './scenes/hotelsPage/Hotels';
import SmallHotels from './scenes/smallHotels/SmallHotels';
import TopHotels from './scenes/topHotels/TopHotels';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  async componentDidMount() {
    console.log('network call');
    try {
      const request = await fetch(
        'https://h4lservices.restlet.net/v1/hotels?media=json'
      );
      if (request.ok) {
        const response = await request.json();
        console.log(response);
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
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>World Hotel reviews</Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1}>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem eventKey={2}>
                  <Link to="/topHotels">Top Hotels</Link>
                </NavItem>
                <NavItem eventKey={3}>
                  <Link to="/luxuryHotels">Luxury Hotels</Link>
                </NavItem>
                <NavItem eventKey={4}>
                  <Link to="/smallHotels">Small Hotels</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            exact={true}
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
        </div>
      </Router>
    );
  }
}
