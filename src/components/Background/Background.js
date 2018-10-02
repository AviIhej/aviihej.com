import React from 'react';
import me from './img/me2.png';
import UnorderedList from '../UnorderedList/UnorderedList';

import "./Background.css";

class Background extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {
      data: [],
      isLoading: false
    }
  }

  componentDidMount(){
    fetch('http://quotes.rest/qod.json')
    .then(response => response.json())
    .then(response => this.setState({
      data: response.contents,
      isLoading: false
    }))
  }

  render() {
    const { isLoading, data } = this.state
    const dailyQuote = data.map(quote => {
      return (
        <div>{quote.success}</div>
      )
    })

    return(
      <figure className="background-image">
        <p>{dailyQuote}</p>
        <img className="me" src={me} alt="me2" />
        <UnorderedList />
      </figure>
    )
  }
}

export default Background;
