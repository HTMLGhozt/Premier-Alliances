import React from 'react';
import './navigation.css';
export default ({ pages }) => (
  <nav class="navigation">{ pages.map(({ title, color }) => (
    <a href={ `#${title}` } style={{ color }}>{ title }</a>
  ))}</nav>
);