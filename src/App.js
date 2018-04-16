import React, { Fragment, Component } from 'react';
import './App.css';
import Header from './Components/Header';
import HeaderFooter from './Components/Header/header-footer.js';
import Page from './Components/Pages';
import Navigation from './Components/Navigation';
import { employmentText, communityText, partnersText } from './default-text.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        { title: 'History', text: '', color: 'rgb(120, 41, 28)' },
        { title: 'Employment', text: employmentText, color: 'rgb(173, 107, 8)' },
        { title: 'Community', text: communityText, color: 'rgb(148, 130, 10)' },
        { title: 'Partners', text: partnersText, color: 'rgb(59, 91, 127)' },
      ],
      showNavigation: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const value = document.documentElement.scrollTop || document.body.scrollTop;
    if (value > 690 && !this.state.showNavigation) {
      this.setState({ showNavigation: true });
    } else if (value <= 690 && this.state.showNavigation) {
      this.setState({ showNavigation: false });
    }
  }
  render() {
    // window.addEventListener('onscroll', this.handleScroll);
    const { pages, showNavigation } = this.state;
    return (
      <Fragment>
        { showNavigation ? <Navigation pages={pages} /> : '' }
        <header className="main">
          <Header ref={this.ref} pages={pages} />
          <HeaderFooter />
        </header>
        {pages.map(page => <Page page={page} />)}
      </Fragment>
    );
  }
}

export default App;
