import React, {Fragment} from 'react';
import './page.css'
import Timeline from '../timeline';

export default props => {
  const { title, text, color: backgroundColor } = props.page;
  return (
    <Fragment>
      <section className="page" style={{ backgroundColor }} id={title}>
        <h1 className="page__title">{title === 'Employment' ? title + ' Opportunities': title}</h1>
        <content className="page__content" dangerouslySetInnerHTML={{ __html: text }}></content>
      </section>
      {title === 'History' ? <Timeline /> : null}
    </Fragment>
  );
};