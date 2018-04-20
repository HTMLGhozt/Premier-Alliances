import React, { Fragment, Component } from 'react';
import './App.css';
import Header from './Components/Header';
import HeaderFooter from './Components/Header/header-footer.js';
import Page from './Components/Pages';
import Navigation from './Components/Navigation';
import { employmentText, communityText, partnersText, historyText } from './default-text.js';

const pages = [
  { title: 'History', text: historyText, color: 'rgb(120, 41, 28)', active: false },
  { title: 'Employment', text: employmentText, color: 'rgb(173, 107, 8)', active: false },
  { title: 'Community', text: communityText, color: 'rgb(148, 130, 10)', active: false },
  { title: 'Partners', text: partnersText, color: 'rgb(59, 91, 127)', active: false },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      pages,
      showNavigation: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.addPosition = this.addPosition.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handlePosition(index) {
    this.setState(({ pages }) => ({
      pages: pages.map((page, i) => {
        page.active = i === index;
        return page;
      })
    }))
    // console.log(this.state);
  }

  handleScroll(event) {
    const value = event.target.documentElement.scrollTop || event.target.body.scrollTop;
    // const page = this.state.pages.find((page, i, arr) => value > page.top && value < (arr[i + 1].top || true))
    for (let i = 0; i < this.state.pages.length; i++) {
      const page = this.state.pages[i];
      if (value >= page.top - 15) {
        this.handlePosition(i);
      }
    }
    // console.log(this.state.pages)
    // if (index > -1) this.handlePosition(index);
    if (value > 690 && !this.state.showNavigation) {
      this.setState({ showNavigation: true });
    } else if (value <= 690 && this.state.showNavigation) {
      this.setState({ showNavigation: false });
    }
  }
  addPosition(top, index) {
    this.setState(({pages}) => ({
      pages: pages.map((page, i) => {
        if (i === index) page.top = top;
        return page; 
      })
    }))
    // console.log(this.state);
  }
  render() {
    const { pages, showNavigation } = this.state;

    return (
      <Fragment>
        { showNavigation ? <Navigation pages={pages} /> : null }
        <header className="main">
          <Header pages={pages} />
          <HeaderFooter />
        </header>
        {pages.map((page, i) => {
          return (
            <Page key={`page${i}`}
              {...page}
              index={i}
              addPosition={this.addPosition}
            />
          )
        })}
      </Fragment>
    );
  }
}

export default App;
