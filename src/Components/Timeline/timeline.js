import React, { Component } from 'react';
import './timeline.css';
import TimelineItem from './timelineItem';

export default class Timeline extends Component {
  constructor (props) {
    super(props);
    this.state = {
      timeline: [
        { date: 1962, text: 'Classroom for disabled children established' },
        { date: 1971, text: 'Vocational center for older children and adults established' },
        { date: 1975, text: 'Name changed from Bisbee ARC to Cochise County Association for the Handicapped' },
        { date: 1985, text: 'Office on Naco Highway in Bisbee purchased' },
        { date: 1995, text: 'Contract for grounds maintenance on Fort Huachuca obtained' },
        { date: 2001, text: 'Janitorial services for the Brian A. Terry Border Patrol Station begin' },
        { date: 2011, text: 'New facilities on Naco Highway are completed' },
        { date: 2014, text: 'CCAH is renamed Premier Alliances, Inc.' },
        { date: 2017, text: 'Premier Alliances purchases Print and Stitch' },
      ],
      start: 0,
      show: 6,
    };
    this.handleTimelineScroll = this.handleTimelineScroll.bind(this);
  }
  handleTimelineScroll(direction) {
    if (direction === 'left' && this.state.start > 0) {
      this.setState(({ start }) => ({ start: --start }));
    } else if (direction === 'right' && (this.state.start + this.state.show) < this.state.timeline.length) {
      this.setState(({ start }) => ({ start: ++start }));
    }
  }
  render() {
    return (
      <div className="timeline">
        <span onClick={() => this.handleTimelineScroll('left')} className="arrow arrow--left">{'<'}</span>
        {this.state.timeline.map((item, index) => {
          if (index < this.state.show + this.state.start && index >= this.state.start) {
            return (
              <TimelineItem { ...item } />
            );
          }
        })}
        {/* <hr className="line" /> */}
        <span onClick={() => this.handleTimelineScroll('right')} className="arrow arrow--right">{'>'}</span>
      </div>
    );
  }
}