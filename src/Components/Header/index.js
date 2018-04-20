import React, { Component, Fragment } from 'react';
import './header.css';
import Image from './logo.svg';

const populateClassNames = index => { 
  return ([
    'main__quarter-section',
    `main__quarter-section--${[1, 2].includes(index) ? 'dark' : 'light'}`,
    `main__quarter-section--justify-${[0, 2].includes(index) ? 'right' : 'left'}`
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
              <a href={`#${heading}`}>
                <h1
                  key={`heading${index}`}
                  className="main__title"
                  style={{ color }}
                >
                {heading}
                </h1>
              </a>
            </div>
          );
        }) }
        <img id="logo" src={ require('./logo.svg') } alt="premier logo"/> 
      </Fragment>
    );
  }
}