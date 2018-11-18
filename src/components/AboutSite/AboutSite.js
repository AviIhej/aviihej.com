import React, { Component } from 'react';

// import Tags from "../Tags/Tags";
import fetchImg from './img/fetching.png'
import map from './img/map.png'
import destructure from './img/destructure.png'
import "./AboutSite.css";

class AboutSite extends Component {
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

    return(
      <div className="container">
        <section className="about">
          <h2>About Site</h2>

          <div className="content">
            
          </div>


          <div className="content">
            <p>
              I wanted to do something different for my personal site. I diddn't just want to create a 
              site that had hard coded data in some basic HTML page,
              which is why I completely rebuilt my personal website in React <span role="img" aria-label="lightning">⚡</span>.
              
              I wanted to display all of the links that I share and the articles that 
              I write/read automatically on my site so that everything would update in real
              time as I make posts online. What better was there to achieve this than to use
              the reddit API! - well technically it was an API that supplys reddit data from. 
              Its called <a style={{color: 'blue'}} href="https://github.com/pushshift/api" target="_blank" rel="noopener noreferrer">PushShift</a>. 
              It was designed and created by the /r/datasets mod team to help provide enhanced functionality
              and search capabilities for searching Reddit comments and submissions.
            </p>
            <p>
              Ok now that I had found a Reddit API, the question was, how do implement it? The answer was simple.
              Set the state in my banner component to be an empty array, and create an isLoading boolean so that I can apply a skeleton loader later.
              Then I just used the fetch function supplied by React inside of the componentDidMount lifecycle method, and fetched the data from the PushShift endpoint:           
              <a style={{color: 'blue'}} href="https://api.pushshift.io" target="_blank" rel="noopener noreferrer">https://api.pushshift.io</a>.
              In my case, I wanted to find my submissions, so the endpoint was https://api.pushshift.io/reddit/search/submission/?author=aviihej'.
              I took the response and returned a promise that resolves with the result of parsing the body text as JSON.
              I then set the state to be equal to the response.
              <br />
              <h1>Reddit Post BannerCards - Reddit API</h1>
              <img src={fetchImg} className="responsive" alt="fetchImg"/>
            </p>
            <p>
              Now that I had the data, my next challenge was how to map each 
              post into a different component for the banner area. I decided to
              make a BannerCard Component to map the data from the state into - but first
              I had to destructure the data so that I could use the individual data fields:
            </p>
              <img src={destructure} className="responsive" alt="destructure"/>
            
            <p>
              Now I just call the map function to map the data into individual BannerCard
              components that I imported.
            </p>
            
              <img src={map} className="responsive" alt="map"/>
            <h1>Other API's</h1>
            <p>
              I used this same method for all of the other API's I used on my website. 
              A couple other areas where I used an API was for my profile image 
              (which loads a new image every time the page laods), and below the profile image,
              where a new math fact is randomly generated. For the profile image, I used Unslpash's API
              and for the math quote, a I used an API called numbers API.
            </p>

            <p>
              My website is a work in progress, but I thought that I would shae with people 
              what went into making it, because its fun building things in public and it benefits
              everyone when we share things!
            </p>
            <p>Stay tuned for new updates to the site!</p>
            {/* <p>
              Below are some of the
              technologies that I am skilled with:
            </p>

            <Tags /> */}
          </div>
        </section>
      </div>
    )
  }
}

export default AboutSite;
