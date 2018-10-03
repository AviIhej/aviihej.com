import React, { Component } from 'react';

import './UnorderedList.css'


class UnorderedList extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            data: [], 
            // isLoading: true
        }
    }
    componentDidMount(){
        fetch('http://numbersapi.com/random/math')
        .then(result => result.text())
        .then(result => this.setState({
          data: result,
        //   isLoading: false
        }))
      }

    render(){

        //Destructure
        const { data } = this.state

        return(
            <div>
                <br />
                <ul>
                    <h3 style={{color: 'white'}}>{data}</h3>
                    <br />
                    <br />
                  <a href="https://www.standardresume.co/avielihejirika" target="_blank">  <li style={{color:'white'}} className="smaller">Resume</li> </a>
                   <a> <li style={{color:'white'}} className="smaller">Projects</li></a>
                  <a>  <li style={{color:'white'}} className="smaller">Pinboard</li> </a>
                 <a href={"www.google.com"}>   <li style={{color:'white'}} className="smaller">Github</li> </a>
                    <br />
                    
                    <li style={{color:'white'}} className="smaller"><a style={{color:'white'}} href="https://hacks.mozilla.org/2015/03/this-api-is-so-fetching/">Eventster</a></li>
                    <br />
                    <li className="love-note">Built with ❤️ by me with React ⚡</li>
                </ul>
            </div>
        )
    }
}
export default UnorderedList;