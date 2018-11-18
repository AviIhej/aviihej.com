import React, { Component } from 'react';
// import MyLoader from '../Loader/Loader'
import BannerCard from '../BannerCard/BannerCard';
// import Button from '../Button/Button';
// import Test from '../Test/Test';
import "./Banner.css";

class Banner extends Component{

  constructor(props){
    super(props)
    this.state = {
      items: [],
      loading: true,
      count: 0,
      disabled: false
    }
  }

  componentDidMount(){
    fetch('https://api.pushshift.io/reddit/search/submission/?author=aviihej')
      .then(result => result.json())
      .then(result => this.setState({
        items: result.data, 
        loading: false
      }))
  }

  handleButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
      disabled: true
    })
  }

  render() { 
    
    (function(d, h, m){
      var js, fjs = d.getElementsByTagName(h)[0];
      if (d.getElementById(m)){return;}
      js = d.createElement(h); js.id = m;
      js.onload = function(){
          window.makerWidgetComInit({
          position: "right",          
          widget: "5ncb2ogrosm3tzu1-abwamrht980x6fqu-na6lpwwvwivophkx"                
      })};
      js.src = "https://makerwidget.com/js/embed.js";
      fjs.parentNode.insertBefore(js, fjs)
  }(document, "script", "dhm"))

    // const { loading, items } = this.state
    const { items } = this.state

       const data = items.map(item => {
       const date = Date(item.created_utc) //convert utc to standard time

      //  if(!items) return <MyLoader />
          return (
            <div className="links">
              <BannerCard 
              title={item.title} 
              key={item.id} 
              url={item.url} 
              author={item.author} 
              date={date}
              selftext={item.selftext}
              // comments={item.num_comments}
              />
              {/* <Test username="mike"/> */}
            </div>
            )
          
        })
        
        return(
      <div className="hello"> 
        {/* This site uses Reddit's api to show the dta you are seeing */}
        {/* <MyLoader /> */}
        {data}
        {/* <a href="https://github.com/you" style={{position: 'absolute', top:'0', right: '0', border: '0'}}>Come see me</a> */}
            {/* <button style={{position: 'absolute', top:'0', left: '0', fontFamily: 'Lato'}} disabled={this.state.disabled} id='button' onClick={() => this.handleButtonClick()}>Click to let me know you visited <span role='img' aria-label='fire'>🔥</span> </button> */}
            {/* <h4 style={{position: 'absolute', top:'0', right: '0', border: '0'}}>Visitor Points: {this.state.count} <span role='img' aria-label='fire'>🔥</span></h4> */}
      </div>
    )
  }
}

export default Banner;