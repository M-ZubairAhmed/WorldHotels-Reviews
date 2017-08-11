import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './scenes/Home.js';
import LuxuryHotels from './scenes/luxuryHotels/LuxuryHotels';
import SmallHotels from './scenes/smallHotels/SmallHotels';
import TopHotels from './scenes/topHotels/TopHotels';

const App = () =>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topHotels">Top Hotels</Link>
        </li>
        <li>
          <Link to="/smallHotels">Small Hotels</Link>
        </li>
        <li>
          <Link to="luxuryHotels">Luxury Hotels</Link>
        </li>
      </ul>
      <Route exact={true} path="/" component={Home} />
      <Route path="/luxuryHotels" component={LuxuryHotels} />
      <Route path="/smallHotels" component={SmallHotels} />
      <Route path="/topHotels" component={TopHotels} />
    </div>
  </Router>;

export default App;
