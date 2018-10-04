import React, { Component } from 'react';
import "./Projects.css";

class Projects extends Component {

  render() { 
    return(
      <div className="projects"> 
        <h1>Projects</h1>
        {/* <ul className="projectList" style={{color: 'black'}}> */}
            <li><h2>Eventster</h2></li>
            <li>An events app that connects people from all over the world</li>
            <li className="uses">Uses: Firebase, Node.js, React</li>

            <li><h2>JobHub</h2></li>
            <li style={{color: 'black'}}>A JobHub with custom GraphQL api serving the front end </li>
            <li className="uses">Uses: Graphql, Node.js, React, Semantic-ui-react</li>


            <li><h2>PyScraper</h2></li>
            <li>A python screen scraper using beautiful soup</li>
            <li className="uses">Uses: Graphql, Node.js, React</li>
            
            <li><h2>RazorBot</h2></li>
            <li style={{color: 'black'}}>A Slackbot that puts an interesting twist on your day</li>
            <li className="uses">Uses: Axios, Node.js, JSON API</li>

            <li><h2>Yelpcamp</h2></li>
            <li>Yelp Camp is a fun application that allows you to view
                 campgrounds with a short description. Once you login
                  or signup you can begin to create your own campgrounds 
                  that includes a title, image address and short description.
            </li>
            <li className="uses">Uses: HTML5, CSS3, JavaScript, Bootstrap, ExpressJS, REST, Passport.js Authentication </li>

            <li><h2>RazorServer</h2></li>
            <li>GraphQL server built with node.js </li>
            <li className="uses">Uses: Graphql, Node.js, React</li>
        
        {/* </ul> */}
      </div>
    )
  }
}

export default Projects;
