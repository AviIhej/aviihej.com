import React, { Component } from 'react';
import MyLoader from '../Loader/Loader'
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
            <div>
              <h1 key={item.id}><a target="_blank" href={item.full_link}>{item.title}</a></h1>
              <p key={item.id}> Author: {item.author}</p>
              <em key={item.id}>{date}</em>
              <p key={item.id}>{item.full_link}</p>
            </div>
          )
        }
    })
  
    return(
      <div className="hello"> 
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