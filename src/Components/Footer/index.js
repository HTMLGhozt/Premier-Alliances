import React from 'react';
import './footer.css';

const styles = {
  height: '140px',
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
};

export default props => (
  <footer style={styles} className="footer">
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
      <img style={{ height: '80%', flex: 0, paddingLeft: '100px', paddingBottom: '10px'}} src={ require('./logo.svg') } alt="premier logo"/>
      {/* <img style={{marginBottom: '8px'}} src={require('../../PA_typeset.svg')} /> */}
      {/* <h1 style={{ flex: 1, marginBottom: '8px', textTransform: 'uppercase', color: 'rgb(120, 41, 28)', fontSize: '1.15em'}}>Premier Alliances, Inc.</h1> */}
      <div style={{ paddingLeft: '15px'}}>
      <p>Copyright © 2018 Premier Alliances, Inc. All rights reserved.</p>
      <p>
        Office: 520.335.0373<br/>
        1556 Naco Highway<br/>
        Bisbee, AZ 85603<br/>
        info@premieralliances.org<br/>
      </p>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <button>Donate</button>
      <button style={{ backgroundColor: 'rgb(148, 130, 10)' }}>Contact Us </button>
      {/* <p>Copyright © 2018 Premier Alliances, Inc. All rights reserved.</p>
      <p>
        Office: 520.335.0373<br/>
        1993 Frontage Rd. | Ste. 104<br/>
        Sierra Vista, AZ 85635<br/>
        info@premieralliances.org<br/>
      </p> */}
    </div>
  </footer>
);