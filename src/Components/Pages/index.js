import React, { Component, Fragment } from 'react';
import './page.css'
import Timeline from '../timeline';

export default class Page extends Component {
  componentDidMount() {
    const top = this.ref.offsetTop;
    // console.log('props', this.props)
    this.props.addPosition(top, this.props.index);
  }
  render() {
    const { title, text, color: backgroundColor, i } = this.props;
    return (
      <Fragment>
        <section className="page" style={{ backgroundColor }} index={i} id={title} ref={node => this.ref = node} >
          <h1 className="page__title">{title === 'Employment' ? title + ' Opportunities': title}</h1>
          <content className="page__content" dangerouslySetInnerHTML={{ __html: text }}></content>
        </section>
        {title === 'History' ? <Timeline /> : null}
      </Fragment>
    );
  }
}
// export default (props) => {
//   const { title, text, color: backgroundColor } = props;
//   return (
//     <Fragment>
//       <section className="page" style={{ backgroundColor }} index={i} id={title}>
//         <h1 className="page__title">{title === 'Employment' ? title + ' Opportunities': title}</h1>
//         <content className="page__content" dangerouslySetInnerHTML={{ __html: text }}></content>
//       </section>
//       {title === 'History' ? <Timeline /> : null}
//     </Fragment>
//   );
// };