import React from 'react';
import './page.css'
export default props => {
  const { title, text, color: backgroundColor } = props.page;
  return (
    <section className="page" style={{ backgroundColor }} id={title}>
      <h1 className="page__title">{title === 'Employment' ? title + ' Opportunities': title}</h1>
      <content className="page__content" dangerouslySetInnerHTML={{ __html: text }}>
      </content>
    </section>
  );
};