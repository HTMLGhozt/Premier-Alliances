import React from 'react';
import './navigation.css';
export default ({ pages }) => (
  <nav className="navigation">{ pages.map(({ title, color, active }, index) => (
    <a
      key={ 'nav' + index }
      href={ `#${title}` }
      style={{ color }}
      className={ active ? 'active-navigation' : null }
    >{ title }</a>
  ))}</nav>
);