import React from 'react';
import './header.css'
import FontAwesome from 'react-fontawesome';

export default () => (
  <div className="main__footer">
    <button>contact us</button>
    <div className="main__footer__text">
      <h1>Premier Alliances, Inc.</h1>
      <p>Improving the lives of people with disabilities.</p>
      <a href="tel:520-335-0373">520 335 0373</a>
    </div>
    <span><FontAwesome name="facebook" /> <FontAwesome name="instagram" /> <FontAwesome name="linkedin-in" /></span>
  </div>
);