import React from 'react';
import './footer.css';

const styles = {
  height: '150px',
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
};

export default props => (
  <footer style={styles} className="footer">
    <div style={{minHeight: '20vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
      <img style={{ height: '100%', flex: 0, paddingLeft: '20px'}} src={ require('./logo.svg') } alt="premier logo"/>
      <h1 style={{ flex: 1, marginBottom: '6px', textTransform: 'uppercase', color: 'rgb(120, 41, 28)'}}>Premier Alliances, Inc.</h1>
    </div>
    <div>
      <p>Copyright © 2018 Premier Alliances, Inc. All rights reserved.</p>
      <p>
        Office: 520.335.0373<br/>
        1993 Frontage Rd. | Ste. 104<br/>
        Sierra Vista, AZ 85635<br/>
        info@premieralliances.org<br/>
      </p>
    </div>
  </footer>
);