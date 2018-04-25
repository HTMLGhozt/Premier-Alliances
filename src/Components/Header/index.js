import React, { Component, Fragment } from 'react';
import './header.css';
// import Marquee3k from 'marquee3000';
import Marquee from 'react-text-marquee';
// import Marquee from 'marquee-react-dwyer';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const populateClassNames = index => { 
  return ([
    'main__quarter-section',
    `main__quarter-section--${[1, 2].includes(index) ? 'dark' : 'light'}`,
    `main__quarter-section--justify-${[0, 1].includes(index) ? 'top' : 'bottom'}`
  ]).join(' ');
};

export default class Header extends Component {
  render() {
    const { pages } = this.props;
    return (
      <Fragment>
        {pages.map(({ title: heading, color }, index) => {
          return (
            <div
              key={`title${index}`}
              className={populateClassNames(index)}
            >
                <h1>
                <AnchorLink
                  className="main__title"
                  style={{ color }}
                  href={`#${heading}`}
                >
                  {heading}
                </AnchorLink>
                </h1>
            </div>
          );
        }) }
        <img id="logo" src={ require('./logo.svg') } alt="premier logo"/>
        {/* <Marquee IsRandom={'false'} TimeToChange={'5'} Size={'h3'} Index0={'test'} Index1={'test2'} index2={'another test'} NumberOfOptions={'3'} TimeToCross={10000} Color={'grey'} /> */}
        <div className="marquee">Move to Bisbee Location Scheduled • Purchase of Print & Stitch Positive for All • New Graphic Designer Hired</div>
      </Fragment>
    );
  }
}