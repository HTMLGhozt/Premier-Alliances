import React from 'react';
import './header.css'
import FontAwesome from 'react-fontawesome';

export default () => (
  <div className="main__footer" style={{padding: '0 50px'}}>
    <button>contact us</button>
    <div className="main__footer__text">
      {/* <h1>Premier Alliances, Inc.</h1> */}
      <img src={require('../../PA_typeset.svg')} alt=""/>
      <p>Improving the lives of people with disabilities.</p>
      <a href="tel:520-335-0373">520 335 0373</a>
    </div>
    <div>
      <span className="logos">
        <i class="fab fa-facebook-square fa-3x"></i>
        <i class="fab fa-twitter-square fa-3x"></i>
        <i class="fab fa-linkedin fa-3x"></i>
      </span>
      <br />
      <a href="https://www.abilityone.gov/">
        <img src={require('../../AO.png')} width='100px' />
      </a>
      <br />
      <a href="https://www.sourceamerica.org/">
        <img src={require('../../SA.png')} width='150px' style={{ padding: '10px 0'}} />
      </a>
    </div>
  </div>
);