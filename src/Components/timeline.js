import React, { Component } from 'react';
import './timeline.css';

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
        // { date: 2011, text: 'New facilities on Naco Highway are completed' },
        // { date: 2014, text: 'CCAH is renamed Premier Alliances, Inc.' },
        // { date: 2017, text: 'Premier Alliances purchases Print and Stitch' },
      ],
    };
  }
  render() {
    return (
      <div class="timeline">
        {this.state.timeline.map(time => {
          const { date } = time
          return (
            <div key={date + 'div'}>
              <h4 key={date + 'date'}>{time.date}</h4>
              {/* <br key={date + 'spacer1'}/> */}
              <p key={date + 'paragraph'}>{time.text}</p>
            </div>
          );
        })}
        <hr class="line" />
      </div>
    );
  }
}