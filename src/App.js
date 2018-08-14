import React, { Component } from 'react';
// includes
import './Assets/css/default.min.css';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// Components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import ContactPage from './components/pages/contact';

class App extends Component {
  state = {
    items: Array.from({length: 2})
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  };

  //var items = ["hi", "hello"];

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          
          <ul>
            <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}> Test 1</Link></li>
          </ul>
          <ScrollableAnchor id={'home'}>
            <HomePage />
          </ScrollableAnchor>

          <ScrollableAnchor id={'about'}>
            <AboutPage />
          </ScrollableAnchor>

          <ScrollableAnchor id={'contact'}>
            <ContactPage />
          </ScrollableAnchor>

          {/*<InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{textAlign: 'center'}}>
                That's all folks!
              </p>
            } >
            {this.state.items.map((i, index) => (
              <div key={index}>
                div - #{index}
              </div>
            ))}
          </InfiniteScroll>*/}
          
          {/*<Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={AboutPage} />
          <Route exact path='/Contact' component={ContactPage} /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
