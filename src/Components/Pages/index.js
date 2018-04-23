import React, { Component, Fragment } from 'react';
import './page.css'
import Timeline from '../Timeline/timeline';

export default class Page extends Component {
  componentDidMount() {
    const top = this.ref.offsetTop;
    this.props.addPosition(top - 15, this.props.index);
  }
  render() {
    const { title, text, color: backgroundColor, i } = this.props;
    return (
      <Fragment>
        <section className={"page" + ' ' + title} style={{ backgroundColor }} index={i} id={title} ref={node => this.ref = node} >
          <h1 className="page__title">{title === 'Employment' ? title + ' Opportunities': title}</h1>
          <content className={`page__content ${title === 'History' ? 'history': ''}`} dangerouslySetInnerHTML={{ __html: text }}></content>
        </section>
        {title === 'History' ? <Timeline /> : null}
      </Fragment>
    );
  }
}