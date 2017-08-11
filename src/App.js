import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './scenes/Home.js';
import LuxuryHotels from './scenes/luxuryHotels/LuxuryHotels';
import SmallHotels from './scenes/smallHotels/SmallHotels';
import TopHotels from './scenes/topHotels/TopHotels';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const App = () =>
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
      <Route exact={true} path="/" component={Home} />
      <Route path="/luxuryHotels" component={LuxuryHotels} />
      <Route path="/smallHotels" component={SmallHotels} />
      <Route path="/topHotels" component={TopHotels} />
    </div>
  </Router>;

export default App;
