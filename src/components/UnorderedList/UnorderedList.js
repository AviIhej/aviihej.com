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
                    <br />
                    <li style={{color:'white'}} className="smaller">Resume</li>
                    <li style={{color:'white'}} className="smaller">Projects</li>
                    <li style={{color:'white'}} className="smaller">Pinboard</li>
                    <li style={{color:'white'}} className="smaller">Github</li>
                    <br />
                    
                    <li style={{color:'white'}} className="smaller"><a style={{color:'white'}} href="https://hacks.mozilla.org/2015/03/this-api-is-so-fetching/">Eventster</a></li>
                </ul>
            </div>
        )
    }
}
export default UnorderedList;