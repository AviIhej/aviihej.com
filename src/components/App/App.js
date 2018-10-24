import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// components
import Background from "../Background/Background";
import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";
import AboutSite from "../AboutSite/AboutSite";
import Projects from '../Projects/Projects';
import GitRelic from '../GitRelic/GitRelic';

// css
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <div>
            <div className="split-background">
              {/* <Link to={''}> */}
                <Background />
              {/* </Link> */}
            </div>

            <main className="split-container">
              <Menu />

              <Switch>
                <Route exact path='/' component={Banner} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/siteinfo' component={AboutSite} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/gitrelic' component={GitRelic} />
              </Switch>
            </main>
          </div>
        </Router>

        <div className="circle-bottom"></div>
      </div>
    )
  }
}

export default App;
