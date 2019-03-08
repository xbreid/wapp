import React from 'react';
import {ReactComponent as Sun} from '../assets/images/sun.svg';
import {ReactComponent as Cloud} from '../assets/images/cloud.svg';

const Spinner = () => (
  <div className="preloader" style={{opacity: 1}}>

    <Sun style={{opacity: 1, marginLeft: 0, marginTop: 0}} />
    <Cloud />

    <div className="rain">
      <span className="drop" />
      <span className="drop" />
      <span className="drop" />
      <span className="drop" />
      <span className="drop" />
      <span className="drop" />
      <span className="drop" />
      <span className="drop" />
      <span className="drop" />
      <span className="drop" />
    </div>

    <div className="text">
      Looking outside for you... one moment!
    </div>
  </div>
);

export default Spinner;
