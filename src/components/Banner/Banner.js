import React, { Component } from 'react';
import MyLoader from '../Loader/Loader'
import BannerCard from '../BannerCard/BannerCard';
import "./Banner.css";

class Banner extends Component{

  constructor(props){
    super(props)
    this.state = {
      items: [],
      loading: true
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

    const { loading, items } = this.state

       const data = items.map(item => {
       const date = Date(item.created_utc) //convert utc to standard time

        if(loading){
          return (
            <div>
              <MyLoader />
            </div>
          )
        }else{
          return (
            <div className="links">
              
              <BannerCard 
              title={item.title} 
              key={item.id} 
              url={item.url} 
              author={item.author} 
              date={date}
              selftext={item.selftext}
              />
            </div>
          )
        }
    })
  
    return(
      <div className="hello"> 
        {/* This site uses Reddit's api to show the dta you are seeing */}
        {/* <MyLoader /> */}
        {data}

      </div>
    )
  }
}



export default Banner;

  // const data = [
    //   {
    //     postId: 1,
    //     id: 1,
    //     name: "id labore ex et quam laborum",
    //     email: "Eliseo@gardner.biz"
    //   },
    //   {
    //     postId: 1,
    //     id: 2,
    //     name: "quo vero reiciendis velit similique earum",
    //     email: "Jayne_Kuhic@sydney.com"
    //   },
    //   {
    //     postId: 1,
    //     id: 3,
    //     name: "odio adipisci rerum aut animi",
    //     email: "Nikita@garfield.biz"
    //   }
    // ]

    // const namesList = data.map(post => {
    //   return(
    //    <h1 key={post.id}>{post.name}</h1>
    //   )
    // })

          // <header>

      //   <div className="hello">Hello! I'm</div>
      //   {/* <ul>{namesList}</ul> */}
      //   <h1>Avi Ihej <span>&</span><br/>
      //   I make things
      //   </h1>
        
      //   <div className="available">
      //     <div className="circle"></div>
      //    Get in touch with me, I like questions: aviihej@gmail.com
      //   </div>
      // </header>