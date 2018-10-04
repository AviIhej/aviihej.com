import React from 'react';
// import me from './img/me2.png';
import UnorderedList from '../UnorderedList/UnorderedList';

import "./Background.css";

class Background extends React.Component {

  render() {
    // const { isLoading, data } = this.state
    return(
      <figure className="background-image">
        <a href="/"><img className="me" src={"https://source.unsplash.com/user/erondu/150x150"} alt="me" /></a>
        <UnorderedList />
      </figure>
    )
  }
}

export default Background;
