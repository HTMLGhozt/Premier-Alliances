import React from 'react';
import './navigation.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default ({ pages }) => (
  <nav className="navigation">{ pages.map(({ title, color, active }, index) => (
    <AnchorLink
      key={ 'nav' + index }
      href={ `#${title}` }
      style={{ color: active ? color : 'gray' }}
      className={ active ? 'active-navigation' : null }
    >{ title }</AnchorLink>
  ))}</nav>
);