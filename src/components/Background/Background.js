import React from 'react';
import me from './img/me2.png';
import UnorderedList from '../UnorderedList/UnorderedList';

import "./Background.css";

class Background extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {
      img: [],
      isLoading: false
    }
  }

  componentDidMount(){
    fetch('https://source.unsplash.com/user/erondu')
    .then(response => response.json())
    .then(response => this.setState({
      img: response.data,
    }))
  }

  render() {
    const { img } = this.state
    return(
      <figure className="background-image">
        {/* <img className="me" src={data} alt="me2" /> */}
        <img src={img} />

        {/* <p>{data}</p> */}
        <UnorderedList />
      </figure>
    )
  }
}

export default Background;
