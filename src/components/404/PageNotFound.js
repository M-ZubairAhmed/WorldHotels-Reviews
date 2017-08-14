import React from 'react';
import { Image } from 'react-bootstrap';
import './pageNotFound.css';

const PageNotFound = props => {
  return (
    <div className="notFound-container">
      <Image className="notFound-img" src="./notfound.png" />
    </div>
  );
};

export default PageNotFound;
