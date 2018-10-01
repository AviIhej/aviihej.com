import React from 'react';
import me from './img/me2.png';
import UnorderedList from '../UnorderedList/UnorderedList';

import "./Background.css";

class Background extends React.Component {
  render() {
    return(
      <figure className="background-image">
        <img className="me" src={me} alt="me2" />
        <UnorderedList />
      </figure>
      
    )
  }
}

export default Background;
