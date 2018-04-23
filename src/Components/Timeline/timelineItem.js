import React, {Component} from 'react';
import './timelineItem.css'

export default class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnmounting: false,
    }
  }
  componentDidMount() {

  }
  componentWillUnmount() {
    this.setState({ isUnmounting: true });
  }
  render () {
    const { date, text } = this.props;
    return (
      <div className={'exampleComponent' + (this.state.isUnmounting ? 'show' : '')}>
        <h4>{date}</h4>
        <p>{text}</p>
      </div>
    )
  }
}