import React from 'react';
import { Link } from 'react-router-dom';

import Socials from "../Socials/Socials"

import "./Menu.css";

class Menu extends React.Component {
  render() {
    return(
      <nav className="menu">
        <ul className="links">
          <li><Link to={'about'}>About Me</Link></li>
          <li><Link to={'contact'}>Contact</Link></li>
          <li><Link to={'siteinfo'}>How I Built This Site</Link></li>
          <li><Link to={'gitrelic'}>Github Stats</Link></li>
          {/* <li><Link to={'projects'}>Projects</Link></li> */}
        </ul>

        <div className="align-right">
          <Socials />
        </div>
      </nav>
    )
  }
}

export default Menu;
