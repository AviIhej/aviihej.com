import React from 'react';
// import me from './img/me2.png';
import UnorderedList from '../UnorderedList/UnorderedList';
import "./Background.css";

class Background extends React.Component {
  constructor(props){
    super(props)
      this.state=({
        clicks: 5,
        show: true,
        count: 0,
        disabled: false
    })
  }

  handleButtonClick = () => {
    this.setState({clicks: this.state.clicks + 2})
  }

  handleButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
      disabled: true
    })
  }


  render() {
    return(
        <figure className="background-image">
        {/* <button style={{position: 'absolute', top:'0', left: '0', fontFamily: 'Lato'}} disabled={this.state.disabled} id='button' onClick={() => this.handleButtonClick()}>Click to let me know you visited</button> */}
        {/* <h4 className="vp" style={{position: 'absolute', top:'0', right: '3', border: '0', color: 'white'}}>Visitor Points: {this.state.count} <span role='img' aria-label='fire'>🔥</span></h4> */}
          <a href="/"><img className="me" src={"https://source.unsplash.com/user/erondu/150x150"} alt="me" /></a>
          <UnorderedList />
        </figure>
    )
  }
}

export default Background;
